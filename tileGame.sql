DROP DATABASE IF EXISTS `TileGame`;
CREATE DATABASE `TileGame`;


USE `TileGame`;
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `email` varchar(50) PRIMARY KEY,
  `first_name` varchar(50),
  `last_name` varchar(50),
  `password` varchar(70)
);


DROP TABLE IF EXISTS `scores`;
CREATE TABLE `scores` (
  `email` varchar(50) PRIMARY KEY,
  `score` integer,
  `score_date` datetime
);

ALTER TABLE `scores` ADD FOREIGN KEY (`email`) REFERENCES `users` (`email`);


INSERT INTO `users` (email,first_name,last_name,password) VALUES ('tweiss747@gmail.com','Tal','Weiss','abc123');
INSERT INTO `users` (email,first_name,last_name,password) VALUES ('DennisG@gmail.com','Dennis','Goldberg','abc123');



