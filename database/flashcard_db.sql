CREATE DATABASE flashcard_db;

USE flashcard_db;

CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(50),
email VARCHAR(100),
password VARCHAR(255)
);

CREATE TABLE flashcard_sets (
id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
title VARCHAR(255),
description TEXT,
FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE flashcards (
id INT AUTO_INCREMENT PRIMARY KEY,
set_id INT,
question TEXT,
answer TEXT,
FOREIGN KEY (set_id) REFERENCES flashcard_sets(id)
);
