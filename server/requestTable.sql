CREATE TABLE course_requests (
    requestid SERIAL PRIMARY KEY, 
    studentid INTEGER,
    cid VARCHAR(20),
    status BOOLEAN DEFAULT FALSE,
    note TEXT,
    FOREIGN KEY(studentid) REFERENCES students(id),
    FOREIGN KEY(cid) REFERENCES courses(cid) MATCH FULL
);