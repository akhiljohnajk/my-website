"""
Database Seeder Script
Initializes SQLite database and populates test records for CineFest 2026.
Author: Akhil John (CCE25CD011)
"""

import sqlite3
import os
import json

DB_FILE = os.path.join(os.path.dirname(__file__), "cinefest.db")
SCHEMA_FILE = os.path.join(os.path.dirname(__file__), "schema.sql")

def init_db():
    print(f"Connecting to database: {DB_FILE}")
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()

    # Execute DDL
    with open(SCHEMA_FILE, "r", encoding="utf-8") as f:
        schema_sql = f.read()
    cursor.executescript(schema_sql)

    # Clean existing data for clean seed
    tables = ["awards", "notifications", "feedback", "bookings", "screenings", "votes", "evaluations", "films", "users"]
    for t in tables:
        cursor.execute(f"DELETE FROM {t};")

    # 1. Users
    users = [
        ("usr_admin", "Akhil John", "admin@cinefest.org", "pbkdf2_admin", "admin", "Festival Chief & System Architect", "+1 555-0100", "CCE25CD011"),
        ("usr_film1", "Elena Rostova", "elena@indiefilms.io", "pbkdf2_pass", "filmmaker", "Award-winning sci-fi director based in Berlin.", "+49 30-123456", None),
        ("usr_film2", "Marcus Bell", "marcus@docuworld.com", "pbkdf2_pass", "filmmaker", "Environmental documentary filmmaker.", "+44 20-7946", None),
        ("usr_judge1", "Dr. Christopher Ross", "ross.jury@filmacademy.edu", "pbkdf2_pass", "judge", "Head of Film Studies, Columbia University", None, None),
        ("usr_judge2", "Sarah Nolan", "sarah.nolan@cinema.org", "pbkdf2_pass", "judge", "Cinematographer & Critic", None, None),
        ("usr_viewer1", "Alex Rivera", "alex@gmail.com", "pbkdf2_pass", "viewer", None, "+1 555-0192", None),
        ("usr_viewer2", "Sophia Chen", "sophia@outlook.com", "pbkdf2_pass", "viewer", None, "+1 555-0843", None)
    ]
    cursor.executemany("INSERT INTO users VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)", users)

    # 2. Films
    films = [
        ("film_1", "Neon Horizon 2049", "Elena Rostova", "usr_film1", "Sci-Fi", 22, "English", "approved", 
         "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80",
         "https://www.youtube.com/embed/dQw4w9WgXcQ", 
         "In a submerged megacity powered by bioluminescent algae, a memory technician discovers an unauthorized consciousness archived inside a discarded android spine.",
         "2026-10-14"),
        ("film_2", "Echoes of Silence", "Akhil John", "usr_admin", "Drama", 18, "English", "approved",
         "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
         "https://www.youtube.com/embed/dQw4w9WgXcQ",
         "An aging lighthouse keeper on a solitary North Atlantic cliff spends his final solstice night conversing with voice recordings left behind by shipwrecks.",
         "2026-10-18"),
        ("film_3", "Canvas of Memories", "Maya Lin", "usr_film1", "Animation", 12, "Silent / Orchestral", "approved",
         "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
         "https://www.youtube.com/embed/dQw4w9WgXcQ",
         "A hand-painted watercolor journey exploring a young girl's relationship with her grandfather's fading recollections through dancing brush strokes.",
         "2026-10-22"),
        ("film_4", "The Whispering Pines", "Rahul Varma", "usr_film2", "Thriller", 16, "Malayalam", "approved",
         "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
         "https://www.youtube.com/embed/dQw4w9WgXcQ",
         "Deep in the misty Western Ghats, a solo botanical surveyor stumbles across an acoustic anomaly where tree rings replay radio signals from forty years ago.",
         "2026-10-26"),
        ("film_5", "Between Two Tides", "Marcus Bell", "usr_film2", "Documentary", 25, "English", "pending",
         "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
         "https://www.youtube.com/embed/dQw4w9WgXcQ",
         "An intimate look at the last remaining artisanal kelp harvesters along Ireland's Atlantic coastline battling ocean warming.",
         "2026-11-02")
    ]
    cursor.executemany("INSERT INTO films VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", films)

    # 3. Screenings
    screenings = [
        ("scr_1", "film_1", "Grand Cinema Hall A (IMAX Dolby Atmos)", "Convention Center, Screen 1", "2026-11-15", "18:00 - 19:30", 15.00, 36, "Scheduled", "2026-11-01"),
        ("scr_2", "film_3", "Red Carpet Pavilion Studio 2", "Festival Hub Main Stage", "2026-11-16", "15:00 - 16:30", 12.00, 36, "Scheduled", "2026-11-01"),
        ("scr_3", "film_4", "Cinema Paradiso Underground", "Old Town Arts Theater", "2026-11-16", "21:30 - 23:00", 10.00, 36, "Scheduled", "2026-11-01")
    ]
    cursor.executemany("INSERT INTO screenings VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", screenings)

    # 4. Evaluations
    evaluations = [
        ("eval_1", "film_1", "usr_judge1", 18, 19, 20, 18, 17, "Masterful worldbuilding and breathtaking lighting in underwater sequences.", "2026-10-30 14:20"),
        ("eval_2", "film_3", "usr_judge2", 20, 19, 19, 18, 19, "Deeply moving watercolor animation. Orchestral score elevates emotion.", "2026-10-31 11:15"),
        ("eval_3", "film_2", "usr_judge1", 18, 18, 18, 17, 17, "Atmospheric study of isolation with poignant sound design.", "2026-11-01 16:45")
    ]
    cursor.executemany("INSERT INTO evaluations (id, film_id, judge_id, story_score, direction_score, visuals_score, sound_score, originality_score, critique, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", evaluations)

    # 5. Votes
    votes = [
        ("vote_1", "film_1", "usr_viewer1", "2026-11-05 12:00:00"),
        ("vote_2", "film_3", "usr_viewer2", "2026-11-06 14:00:00")
    ]
    cursor.executemany("INSERT INTO votes VALUES (?, ?, ?, ?)", votes)

    # 6. Bookings
    bookings = [
        ("BK-82914", "scr_1", "usr_viewer1", json.dumps(["A3", "A4"]), 2, 30.00, "Confirmed", "2026-11-05 10:30:00"),
        ("BK-93102", "scr_2", "usr_viewer2", json.dumps(["C3", "C4"]), 2, 24.00, "Confirmed", "2026-11-06 14:15:00")
    ]
    cursor.executemany("INSERT INTO bookings VALUES (?, ?, ?, ?, ?, ?, ?, ?)", bookings)

    # 7. Feedback
    feedback = [
        ("fb_1", "usr_viewer1", "Screening Experience", 5, "Incredible curation of sci-fi films this year! Sound in Hall A was pristine.", "2026-11-06"),
        ("fb_2", "usr_film2", "Festival Organization", 5, "Seamless submission workflow and transparent judging rubric.", "2026-11-05")
    ]
    cursor.executemany("INSERT INTO feedback VALUES (?, ?, ?, ?, ?, ?)", feedback)

    # 8. Notifications
    notifs = [
        ("notif_1", "Official Selection 2026 Revealed!", "The CineFest selection committee has approved the first batch of entries.", "Selection", 0, "2026-11-01"),
        ("notif_2", "Audience Choice Voting Is Live!", "Viewers can now cast their daily vote for the prestigious Audience Award.", "Voting", 1, "2026-11-05")
    ]
    cursor.executemany("INSERT INTO notifications VALUES (?, ?, ?, ?, ?, ?)", notifs)

    # 9. Awards
    awards = [
        ("aw_1", "Best Short Film (Jury Grand Prize)", "Canvas of Memories", "Maya Lin", "95 / 100", "2026-11-07"),
        ("aw_2", "Best Sci-Fi & Visual Effects", "Neon Horizon 2049", "Elena Rostova", "92 / 100", "2026-11-07")
    ]
    cursor.executemany("INSERT INTO awards VALUES (?, ?, ?, ?, ?, ?)", awards)

    conn.commit()
    conn.close()
    print("Database seeding completed successfully.")

if __name__ == "__main__":
    init_db()
