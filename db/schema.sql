###THE SCHEMA MYSQL
CREATE DATABASE  IF NOT EXISTS burgers_db;
##USE WILL GRAB THE DB CALLED burgers_db
USE burgers_db;

##this will drop the table if the data base exist.
DROP TABLE IF EXISTS burgers;


CREATE TABLE burgers(	
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOL DEFAULT false,
	PRIMARY KEY (id)
);
