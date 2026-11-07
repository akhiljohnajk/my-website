-- ========================================================================
-- SHORT FILM FEST MANAGEMENT SYSTEM - SQLITE RELATIONAL SCHEMA
-- Student Name: AKHIL JOHN | Regno: CCE25CD011
-- ========================================================================

-- Module 1: User Authentication & Role-Based Access Control
CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL CHECK(role IN ('admin', 'filmmaker', 'judge', 'viewer')),
    bio TEXT,
    phone VARCHAR(20),
    reg_no VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Module 2: Film Submission & Review
CREATE TABLE IF NOT EXISTS films (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    director VARCHAR(100) NOT NULL,
    filmmaker_id VARCHAR(36) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    duration INT NOT NULL CHECK(duration > 0 AND duration <= 60),
    language VARCHAR(50) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
    poster_url TEXT,
    trailer_url TEXT,
    synopsis TEXT NOT NULL,
    submitted_date DATE DEFAULT (DATE('now')),
    FOREIGN KEY (filmmaker_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Module 3: Jury Evaluation & Rubric Scores
CREATE TABLE IF NOT EXISTS evaluations (
    id VARCHAR(36) PRIMARY KEY,
    film_id VARCHAR(36) NOT NULL,
    judge_id VARCHAR(36) NOT NULL,
    story_score INT CHECK(story_score BETWEEN 0 AND 20),
    direction_score INT CHECK(direction_score BETWEEN 0 AND 20),
    visuals_score INT CHECK(visuals_score BETWEEN 0 AND 20),
    sound_score INT CHECK(sound_score BETWEEN 0 AND 20),
    originality_score INT CHECK(originality_score BETWEEN 0 AND 20),
    total_score INT GENERATED ALWAYS AS (story_score + direction_score + visuals_score + sound_score + originality_score) VIRTUAL,
    critique TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE,
    FOREIGN KEY (judge_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(film_id, judge_id)
);

-- Module 3: Audience Voting
CREATE TABLE IF NOT EXISTS votes (
    id VARCHAR(36) PRIMARY KEY,
    film_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(film_id, user_id)
);

-- Module 4: Event & Screening Management
CREATE TABLE IF NOT EXISTS screenings (
    id VARCHAR(36) PRIMARY KEY,
    film_id VARCHAR(36) NOT NULL,
    venue VARCHAR(150) NOT NULL,
    city_venue VARCHAR(150),
    screening_date DATE NOT NULL,
    time_slot VARCHAR(50) NOT NULL,
    ticket_price DECIMAL(6, 2) NOT NULL,
    total_seats INT DEFAULT 36,
    status VARCHAR(20) DEFAULT 'Scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (film_id) REFERENCES films(id) ON DELETE CASCADE
);

-- Module 5: Ticket Booking & Digital Passes
CREATE TABLE IF NOT EXISTS bookings (
    id VARCHAR(36) PRIMARY KEY,
    screening_id VARCHAR(36) NOT NULL,
    user_id VARCHAR(36) NOT NULL,
    seats_json TEXT NOT NULL, -- e.g. ["A1", "A2"]
    seat_count INT NOT NULL,
    total_amount DECIMAL(8, 2) NOT NULL,
    booking_status VARCHAR(20) DEFAULT 'Confirmed',
    booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (screening_id) REFERENCES screenings(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Module 6: Attendee Feedback
CREATE TABLE IF NOT EXISTS feedback (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    category VARCHAR(50) NOT NULL,
    rating INT CHECK(rating BETWEEN 1 AND 5),
    comments TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Module 6: Broadcast Notifications & Announcements
CREATE TABLE IF NOT EXISTS notifications (
    id VARCHAR(36) PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    badge VARCHAR(50) DEFAULT 'Notice',
    is_urgent BOOLEAN DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Festival Honors & Awards Table
CREATE TABLE IF NOT EXISTS awards (
    id VARCHAR(36) PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    film_title VARCHAR(200) NOT NULL,
    recipient VARCHAR(100) NOT NULL,
    score_distinction VARCHAR(50),
    announced_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Database Indexes for high performance
CREATE INDEX IF NOT EXISTS idx_films_status ON films(status);
CREATE INDEX IF NOT EXISTS idx_screenings_date ON screenings(screening_date);
CREATE INDEX IF NOT EXISTS idx_evaluations_film ON evaluations(film_id);
CREATE INDEX IF NOT EXISTS idx_votes_film ON votes(film_id);
