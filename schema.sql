CREATE TABLE IF NOT EXISTS Host (
    hostName TEXT, 
    hostPassword TEXT, 
    organization TEXT,
    email TEXT
);

CREATE TABLE IF NOT EXISTS User(
    userName TEXT,
    email TEXT,
    organization TEXT
)