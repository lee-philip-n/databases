CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
/* Describe your table here.*/
  id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(15),
  UNIQUE(username)
);

CREATE TABLE rooms (
/* Describe your table here.*/
  id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  roomname varchar(15),
  UNIQUE(roomname)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId int(10) NOT NULL, 
  message varchar(150) NOT NULL,
  roomId int(10) NOT NULL, 
  FOREIGN KEY (userId) 
    REFERENCES users(id),
  FOREIGN KEY (roomId) 
    REFERENCES rooms(id)
);



/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u student -p < server/schema.sql
 *  to create the database and the tables.*/

