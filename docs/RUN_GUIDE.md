# QUICKSTART & RUN GUIDE
## Short Film Fest Management System (CineFest 2026)
**Student:** AKHIL JOHN (Regno: CCE25CD011)

---

### Option 1: Instant Zero-Install Launch (Recommended)
You can run and test the complete system immediately in any web browser without needing to install any server or dependencies:

1. Navigate to the project directory:
   ```
   C:\Users\leena\.gemini\antigravity\scratch\short-film-fest
   ```
2. Double-click **`index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge / Firefox**.
3. The platform will load instantly with pre-seeded demo data, active role switching, interactive seat maps, printable passes, and full moderation controls!

---

### Option 2: Running with Python Flask Backend & SQLite Database

If you wish to run the full-stack Python server with SQLite:

1. **Open PowerShell / Terminal** in the backend folder:
   ```powershell
   cd C:\Users\leena\.gemini\antigravity\scratch\short-film-fest\backend
   ```

2. **Install Python dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

3. **Initialize and Seed the SQLite Database:**
   ```powershell
   python seed.py
   ```
   *This creates `cinefest.db` and populates sample films, screenings, judges, and users.*

4. **Launch the Flask REST API Server:**
   ```powershell
   python app.py
   ```
   *The server starts listening on `http://localhost:5000` with CORS enabled.*

---

### Step-by-Step Module Testing Guide

#### 1. Role Switching & Auth (Module 1)
- Click the role buttons in the top navigation bar:
  - **`Admin (Akhil John)`**: Unlocks moderation queue, event creation, revenue stats, and award publishing.
  - **`Filmmaker`**: Switches persona to indie director; opens submission desk and tracking.
  - **`Judge / Jury`**: Switches to accredited critic; opens 100-point rubric scoring sheet.
  - **`Audience / Viewer`**: Opens public trailer catalog, audience voting, and seat booking.

#### 2. Film Submission & Admin Moderation (Module 2)
- Click **Filmmaker** role -> go to **Film Submission (M2)**.
- Click **"🎬 Submit New Short Film"**, fill in the title, director, genre, runtime, and synopsis, and submit.
- Switch to **Admin** role -> go to **Admin Dashboard (M7)**.
- See your submitted film in the **Moderation Queue** with status `PENDING`.
- Click **"Approve"** -> The film status immediately updates to `APPROVED` and appears in the public festival catalog!

#### 3. Jury Evaluation & Rubric (Module 3)
- Switch to **Judge / Jury** role -> navigate to **Jury Evaluation (M3)**.
- Click **"Score This Film"** next to an approved film.
- Adjust the 5 rubric criteria:
  - Story & Screenplay (0-20)
  - Direction & Acting (0-20)
  - Cinematography & VFX (0-20)
  - Sound & Score (0-20)
  - Originality & Impact (0-20)
- The composite total (out of 100) automatically computes in real-time.
- Enter written critique and click **"Submit Score"**.

#### 4. Audience Voting (Module 3)
- Switch to **Audience / Viewer** role -> navigate to **Films & Voting (M3)**.
- Browse the approved films, watch the trailer preview modal, and click **"Vote"**.
- Notice the vote counter increments in real-time. Clicking again prevents duplicate votes per viewer.

#### 5. Screening Schedules & Venue Setup (Module 4)
- Switch to **Admin** role -> navigate to **Screening Schedules (M4)**.
- Click **"➕ Schedule New Screening"**, pick an approved film, enter the hall name, date, time slot, and ticket price, then save.

#### 6. Interactive Seat Selection & Ticket Booking (Module 5)
- Navigate to **Ticket Booking (M5)** or click **"Select Seats"** on any screening card.
- A visual cinema auditorium map opens with screen at front and rows A-F.
- Click seats (e.g. A3, A4, B5) to toggle selection. The total price updates automatically.
- Click **"Confirm & Pay"** -> A digital festival pass is generated with Booking ID, seat details, and scannable barcode!
- Click **"Print Pass / PDF"** to preview or print the official ticket pass.

#### 7. Feedback & Announcements (Module 6)
- Go to **Feedback (M6)** to submit attendee reviews with 1-5 star ratings.
- Go to **Announcements (M6)** to read official notices; Admin can click **"📢 Post Announcement"** to broadcast alerts.

#### 8. Admin Telemetry & Reset (Module 7)
- Go to **Admin Dashboard (M7)** to inspect gross revenue, total tickets sold, audience votes, and genre breakdown charts.
- To reset the platform back to pristine demo state at any time, click **"Reset Demo Data"** in the footer or header.
