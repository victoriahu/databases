CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  messageid int AUTO_INCREMENT,
  text varchar(255) NOT NULL,
  roomname varchar(255),
  userid int,
  PRIMARY KEY (messageid),
  FOREIGN KEY (userid)
    REFERENCES users(id)
  /* Describe your table here.*/
);

CREATE PROCEDURE `MessagesAdd` (
  IN _messageid int,
  IN _text varchar(255), 
  IN _roomid int,
  IN _userid int
)
BEGIN 
  IF _messageid = 0 THEN
    INSERT INTO messages(text, roomid, userid) 
    VALUES(_text, _roomid, _userid);

    SET _messageid = LAST_INSERT_ID();
  ELSE
    UPDATE messages
    SET
    text = _text,
    roomid = _roomid,
    userid = _userid
    WHERE messageid = _messageid;
END IF;
  SELECT _messageid AS 'messageid';
END

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/