DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
    );

    SELECT *
    FROM burgers;