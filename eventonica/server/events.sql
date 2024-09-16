CREATE TABLE events (
    id int, 
    eventName varchar(255), 
    category varchar(255),
    eventDate date,
    eventTime time,
    eventLocation varchar(255),

)

INSERT INTO events(id, eventName, category, eventDate, eventTime, eventLocation)
VALUES 
    (1, 'JavaScript Coding Challenge: Beginner Friendly', 'Education', '2024-08-23', '18:00:00', 'Zoom'),
    (2, 'Pair-Programming Session', 'Education', '2024-09-15', '18:30:00', 'Zoom'),
    (3, 'Friday FunDay', 'Celebration', '2024-09-06', '14:30:00', 'Zoom'),
    (4, 'Mock Interviews', 'Education', '2024-06-03', '12:00:00', 'Zoom'),
    (5, 'Mentor-Mentee Luncheon', 'Networking', '2024-10-27', '12:30:00', 'Zoom'),
    (6, 'Halloween Party', 'Celebration', '2024-10-31', '17:00:00', 'Zoom')