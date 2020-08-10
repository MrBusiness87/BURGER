DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN DEFAULT false
    );

INSERT INTO burgers(burger_name, devoured)
VALUES ("hamburger",false), ("cheeseburger",false), ("veggieburger",false);

SELECT * FROM burgers;