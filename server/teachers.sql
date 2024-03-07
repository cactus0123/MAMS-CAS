CREATE TABLE teachers (
    id SERIAL PRIMARY KEY,
    first VARCHAR(255) NOT NULL,
    last VARCHAR(255) NOT NULL,
    approverInitial VARCHAR(5)
);

INSERT INTO teachers (first, last, approverInitial) VALUES ('Kristen', 'Burns', 'KB'), 
('Kevin', 'Crowthers', 'KC'), 
('Maureen', 'Chase', 'MC'), 
('Angela', 'Taricco', 'AT'),
('Kristen', 'Small', 'KS'),
('Julia', 'Wildfong', 'JW'),
('Anne', 'Ludes', 'AL');