CREATE TABLE courseRequests (
    requestid SERIAL PRIMARY KEY, 
    studentid INTEGER,
    cid VARCHAR(20),
    status VARCHAR(25),
    note TEXT,
    FOREIGN KEY(studentid) REFERENCES students(id),
    FOREIGN KEY(cid) REFERENCES courses(cid) MATCH FULL
);