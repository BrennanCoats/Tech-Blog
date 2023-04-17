DROP DATABASE IF EXISTS mod14;
CREATE DATABASE mod14;

USE mod14;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(30),
    password VARCHAR(200),
    PRIMARY KEY (id)
);

CREATE TABLE post (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50),
    content VARCHAR(50),
    users_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (users_id)
    REFERENCES user(id)
    ON DELETE SET NULL
);

CREATE TABLE comment (
    id INT NOT NULL AUTO_INCREMENT,
    content VARCHAR(50),
    date_created VARCHAR(20),
    user_id INT,
    post_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id)
    REFERENCES user(id),
    FOREIGN KEY (post_id)
    REFERENCES post(id)
    ON DELETE SET NULL
);