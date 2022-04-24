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
  `score_id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(50) ,
  `score` integer,
  `score_date` datetime
);

ALTER TABLE `scores` ADD FOREIGN KEY (`email`) REFERENCES `users` (`email`);


INSERT INTO `users` (email,first_name,last_name,password) VALUES ('tweiss747@gmail.com','Tal','Weiss','$2a$10$jfDjGp2LOGQaKPnqLAJYu.96VY.aFCQtjozw1HPcH38yBmcvKVUEu');
INSERT INTO `users` (email,first_name,last_name,password) VALUES ('DennisG@gmail.com','Dennis','Goldberg','$2a$10$jfDjGp2LOGQaKPnqLAJYu.96VY.aFCQtjozw1HPcH38yBmcvKVUEu
');

INSERT INTO `scores` (email,score,score_date) VALUES ('tweiss747@gmail.com',222222,'1993-11-09 00:00:00.00');
INSERT INTO `scores` (email,score,score_date) VALUES ('tweiss747@gmail.com',223334,'1993-11-09 00:00:00.00');

