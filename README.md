# Short Film Fest Management System (CineFest 2026)

**Student Name:** AKHIL JOHN  
**Registration Number:** CCE25CD011  
**Topic:** Short film fest management system  
**Target Syllabus:** Computer Science / Computer & Communication Engineering  

---

## 📽️ Project Summary
The **Short Film Fest Management System** is a complete, web-based platform designed to manage short film competitions and festival activities. It covers all 7 modules outlined in the project specification:

1. **User Authentication Module:** Multi-role RBAC for Admin, Filmmakers, Judges, and Viewers.
2. **Film Submission Module:** Upload and manage short film metadata, director information, and trailer links with admin review & approval workflow.
3. **Evaluation and Voting Module:** 100-point composite rubric for accredited jury members and live voting for the Audience Choice Award.
4. **Event and Screening Management Module:** Auditorium schedules, dates, time slots, venue locations, and ticket pricing.
5. **Ticket Booking Module:** Visual cinema seating grid (Rows A-F), price calculations, and digital pass generation with scannable barcode.
6. **Feedback and Notification Module:** Attendee rating reviews, admin broadcast alerts, and laureate announcements.
7. **Admin Dashboard Module:** Real-time analytics, revenue tracking, submission status breakdown, and user management.

---

## 📂 Project Structure
```
short-film-fest/
├── index.html               # Production-ready, zero-install Web Application
├── style.css                # Cinema festival design styling & seat map effects
├── app.js                   # Application state engine, mock DB, and role workflows
├── README.md                # Project documentation overview
├── backend/
│   ├── app.py               # Python Flask REST API server for all 7 modules
│   ├── schema.sql           # SQLite relational DDL schema with 3NF tables & indexes
│   ├── seed.py              # Automated database populator script
│   └── requirements.txt     # Python backend dependencies
└── docs/
    ├── PROJECT_REPORT.md    # Comprehensive academic project report with ERD & DFDs
    └── RUN_GUIDE.md         # Detailed testing & execution instructions
```

---

## 🚀 How to Run
Simply open **`index.html`** in any web browser (Chrome, Edge, Firefox, Safari).  
Everything is self-contained with pre-seeded data, role switching, interactive seat bookings, and live voting.

For Python backend mode:
```powershell
cd backend
pip install -r requirements.txt
python seed.py
python app.py
```

See [docs/RUN_GUIDE.md](docs/RUN_GUIDE.md) and [docs/PROJECT_REPORT.md](docs/PROJECT_REPORT.md) for complete details.
