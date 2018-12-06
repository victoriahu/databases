CREATE DATABASE chat;
USE chat;

CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT,
  roomname varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  messageid int AUTO_INCREMENT,
  text varchar(255) NOT NULL,
  roomid int,
  userid int,
  PRIMARY KEY (messageid),
  FOREIGN KEY (roomid)
    REFERENCES rooms(id),
  FOREIGN KEY (userid)
    REFERENCES users(id)
  /* Describe your table here.*/
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/