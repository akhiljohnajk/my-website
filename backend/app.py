"""
Short Film Fest Management System - Flask REST API Backend
Student Name: AKHIL JOHN | Regno: CCE25CD011
Supported Modules:
  1. User Authentication Module
  2. Film Submission Module
  3. Evaluation and Voting Module
  4. Event and Screening Management Module
  5. Ticket Booking Module
  6. Feedback and Notification Module
  7. Admin Dashboard Module
"""

import os
import sqlite3
import json
import uuid
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DB_PATH = os.path.join(os.path.dirname(__file__), "cinefest.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

# ============================================================================
# MODULE 1: USER AUTHENTICATION & ACCESS CONTROL
# ============================================================================
@app.route("/api/auth/login", methods=["POST"])
def login():
    data = request.json or {}
    email = data.get("email")
    password = data.get("password")

    db = get_db()
    user = db.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    db.close()

    if not user:
        return jsonify({"success": False, "error": "Invalid email or user not found"}), 401

    return jsonify({
        "success": True,
        "user": {
            "id": user["id"],
            "name": user["name"],
            "email": user["email"],
            "role": user["role"],
            "reg_no": user["reg_no"]
        }
    })

@app.route("/api/auth/register", methods=["POST"])
def register():
    data = request.json or {}
    name = data.get("name")
    email = data.get("email")
    password = data.get("password", "pass")
    role = data.get("role", "viewer")

    user_id = "usr_" + uuid.uuid4().hex[:8]
    db = get_db()
    try:
        db.execute(
            "INSERT INTO users (id, name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)",
            (user_id, name, email, password, role)
        )
        db.commit()
    except sqlite3.IntegrityError:
        db.close()
        return jsonify({"success": False, "error": "Email already registered"}), 400

    db.close()
    return jsonify({"success": True, "userId": user_id, "name": name, "role": role})

# ============================================================================
# MODULE 2: FILM SUBMISSION & MODERATION
# ============================================================================
@app.route("/api/films", methods=["GET"])
def get_films():
    status = request.args.get("status")
    genre = request.args.get("genre")
    db = get_db()
    
    query = "SELECT f.*, (SELECT COUNT(*) FROM votes v WHERE v.film_id = f.id) as votes, (SELECT ROUND(AVG(e.total_score)) FROM evaluations e WHERE e.film_id = f.id) as avg_score FROM films f WHERE 1=1"
    params = []
    if status:
        query += " AND f.status = ?"
        params.append(status)
    if genre and genre != "ALL":
        query += " AND f.genre = ?"
        params.append(genre)

    films = db.execute(query, params).fetchall()
    db.close()
    return jsonify([dict(f) for f in films])

@app.route("/api/films", methods=["POST"])
def submit_film():
    data = request.json or {}
    film_id = "film_" + uuid.uuid4().hex[:8]
    
    db = get_db()
    db.execute(
        """INSERT INTO films (id, title, director, filmmaker_id, genre, duration, language, status, poster_url, trailer_url, synopsis)
           VALUES (?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?)""",
        (
            film_id,
            data.get("title"),
            data.get("director"),
            data.get("filmmakerId", "usr_admin"),
            data.get("genre"),
            data.get("duration", 15),
            data.get("language", "English"),
            data.get("posterUrl"),
            data.get("trailerUrl"),
            data.get("synopsis")
        )
    )
    db.commit()
    db.close()
    return jsonify({"success": True, "filmId": film_id, "status": "pending"}), 201

@app.route("/api/films/<film_id>/status", methods=["PATCH"])
def update_film_status(film_id):
    data = request.json or {}
    status = data.get("status") # approved, rejected, pending
    if status not in ["approved", "rejected", "pending"]:
        return jsonify({"error": "Invalid status"}), 400

    db = get_db()
    db.execute("UPDATE films SET status = ? WHERE id = ?", (status, film_id))
    db.commit()
    db.close()
    return jsonify({"success": True, "filmId": film_id, "newStatus": status})

# ============================================================================
# MODULE 3: EVALUATION & VOTING
# ============================================================================
@app.route("/api/evaluations", methods=["POST"])
def submit_evaluation():
    data = request.json or {}
    eval_id = "eval_" + uuid.uuid4().hex[:8]

    db = get_db()
    try:
        db.execute(
            """INSERT INTO evaluations (id, film_id, judge_id, story_score, direction_score, visuals_score, sound_score, originality_score, critique)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
               ON CONFLICT(film_id, judge_id) DO UPDATE SET
               story_score = excluded.story_score,
               direction_score = excluded.direction_score,
               visuals_score = excluded.visuals_score,
               sound_score = excluded.sound_score,
               originality_score = excluded.originality_score,
               critique = excluded.critique""",
            (
                eval_id,
                data.get("filmId"),
                data.get("judgeId"),
                data.get("storyScore"),
                data.get("directionScore"),
                data.get("visualsScore"),
                data.get("soundScore"),
                data.get("originalityScore"),
                data.get("critique")
            )
        )
        db.commit()
    except Exception as e:
        db.close()
        return jsonify({"error": str(e)}), 400

    db.close()
    return jsonify({"success": True, "message": "Evaluation recorded successfully"})

@app.route("/api/films/<film_id>/vote", methods=["POST"])
def cast_vote(film_id):
    data = request.json or {}
    user_id = data.get("userId", "usr_viewer1")
    vote_id = "vote_" + uuid.uuid4().hex[:8]

    db = get_db()
    try:
        db.execute("INSERT INTO votes (id, film_id, user_id) VALUES (?, ?, ?)", (vote_id, film_id, user_id))
        db.commit()
    except sqlite3.IntegrityError:
        db.close()
        return jsonify({"success": False, "error": "User already voted for this film"}), 400

    db.close()
    return jsonify({"success": True, "message": "Vote recorded"})

# ============================================================================
# MODULE 4: EVENT & SCREENING MANAGEMENT
# ============================================================================
@app.route("/api/screenings", methods=["GET"])
def get_screenings():
    db = get_db()
    screenings = db.execute(
        """SELECT s.*, f.title as film_title, f.poster_url 
           FROM screenings s 
           JOIN films f ON s.film_id = f.id
           ORDER BY s.screening_date, s.time_slot"""
    ).fetchall()
    db.close()
    return jsonify([dict(s) for s in screenings])

@app.route("/api/screenings", methods=["POST"])
def add_screening():
    data = request.json or {}
    scr_id = "scr_" + uuid.uuid4().hex[:8]
    
    db = get_db()
    db.execute(
        """INSERT INTO screenings (id, film_id, venue, city_venue, screening_date, time_slot, ticket_price, total_seats)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)""",
        (
            scr_id,
            data.get("filmId"),
            data.get("venue"),
            data.get("cityVenue", "Main Campus Cinema"),
            data.get("date"),
            data.get("timeSlot"),
            data.get("ticketPrice", 12.0),
            data.get("totalSeats", 36)
        )
    )
    db.commit()
    db.close()
    return jsonify({"success": True, "screeningId": scr_id}), 201

# ============================================================================
# MODULE 5: TICKET BOOKING & PASSES
# ============================================================================
@app.route("/api/bookings", methods=["POST"])
def book_ticket():
    data = request.json or {}
    booking_id = "BK-" + str(uuid.uuid4().int)[:5]
    seats = data.get("seats", [])

    db = get_db()
    db.execute(
        """INSERT INTO bookings (id, screening_id, user_id, seats_json, seat_count, total_amount)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (
            booking_id,
            data.get("screeningId"),
            data.get("userId", "usr_viewer1"),
            json.dumps(seats),
            len(seats),
            data.get("totalAmount", 24.0)
        )
    )
    db.commit()
    db.close()
    return jsonify({"success": True, "bookingId": booking_id, "seats": seats})

@app.route("/api/bookings", methods=["GET"])
def get_user_bookings():
    user_id = request.args.get("userId")
    db = get_db()
    query = """
        SELECT b.*, s.venue, s.screening_date, s.time_slot, f.title as film_title
        FROM bookings b
        JOIN screenings s ON b.screening_id = s.id
        JOIN films f ON s.film_id = f.id
    """
    params = []
    if user_id:
        query += " WHERE b.user_id = ?"
        params.append(user_id)
    
    rows = db.execute(query, params).fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])

# ============================================================================
# MODULE 6: FEEDBACK & NOTIFICATIONS
# ============================================================================
@app.route("/api/feedback", methods=["GET", "POST"])
def handle_feedback():
    db = get_db()
    if request.method == "POST":
        data = request.json or {}
        fb_id = "fb_" + uuid.uuid4().hex[:8]
        db.execute(
            "INSERT INTO feedback (id, user_id, category, rating, comments) VALUES (?, ?, ?, ?, ?)",
            (fb_id, data.get("userId", "usr_viewer1"), data.get("category"), data.get("rating", 5), data.get("comments"))
        )
        db.commit()
        db.close()
        return jsonify({"success": True, "feedbackId": fb_id})

    rows = db.execute("SELECT f.*, u.name as user_name FROM feedback f JOIN users u ON f.user_id = u.id ORDER BY f.submitted_at DESC").fetchall()
    db.close()
    return jsonify([dict(r) for r in rows])

@app.route("/api/notifications", methods=["GET", "POST"])
def handle_notifications():
    db = get_db()
    if request.method == "POST":
        data = request.json or {}
        n_id = "notif_" + uuid.uuid4().hex[:8]
        db.execute(
            "INSERT INTO notifications (id, title, message, badge, is_urgent) VALUES (?, ?, ?, ?, ?)",
            (n_id, data.get("title"), data.get("message"), data.get("badge", "Alert"), data.get("isUrgent", False))
        )
        db.commit()
        db.close()
        return jsonify({"success": True, "notificationId": n_id})

    notifs = db.execute("SELECT * FROM notifications ORDER BY created_at DESC").fetchall()
    db.close()
    return jsonify([dict(n) for n in notifs])

# ============================================================================
# MODULE 7: ADMIN DASHBOARD METRICS
# ============================================================================
@app.route("/api/admin/metrics", methods=["GET"])
def get_admin_metrics():
    db = get_db()
    total_films = db.execute("SELECT COUNT(*) FROM films").fetchone()[0]
    approved_films = db.execute("SELECT COUNT(*) FROM films WHERE status = 'approved'").fetchone()[0]
    pending_films = db.execute("SELECT COUNT(*) FROM films WHERE status = 'pending'").fetchone()[0]
    total_votes = db.execute("SELECT COUNT(*) FROM votes").fetchone()[0]
    total_bookings = db.execute("SELECT COUNT(*) FROM bookings").fetchone()[0]
    gross_revenue = db.execute("SELECT COALESCE(SUM(total_amount), 0) FROM bookings").fetchone()[0]
    total_users = db.execute("SELECT COUNT(*) FROM users").fetchone()[0]
    
    # Genre distribution
    genre_rows = db.execute("SELECT genre, COUNT(*) as count FROM films GROUP BY genre").fetchall()
    genre_breakdown = {r["genre"]: r["count"] for r in genre_rows}

    db.close()
    return jsonify({
        "totalFilms": total_films,
        "approvedFilms": approved_films,
        "pendingFilms": pending_films,
        "totalVotes": total_votes,
        "totalBookings": total_bookings,
        "grossRevenue": float(gross_revenue),
        "totalUsers": total_users,
        "genreBreakdown": genre_breakdown
    })

if __name__ == "__main__":
    print("Starting CineFest 2026 API server on http://localhost:5000 ...")
    app.run(debug=True, port=5000)
