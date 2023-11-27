DROP TABLE IF EXISTS data;
CREATE TABLE data(
id INTEGER PRIMARY KEY AUTOINCREMENT,
imageTitle TEXT, 
imageDescription TEXT,
imageCategory TEXT,
imageURL TEXT);

INSERT INTO data(imageTitle,imageCategory, imageURL, imageDescription)
VALUES('image 1','eco-friendly design','images/1.png','Computers are extremely impactful when it comes to eco-friendly design, since they used to be hand drawn. Now that computers are here, they can help designs become more executable, be made more efficiently, and waste less materials in the meantime. In order to fully understand how computers help: I think it would be helpful for some background knowledge on environmental research and computers.'),
('image 2','eco-friendly design','images/2.png','Throughout environmental research and design, computers are used to calculate, analyze, compare, and scruntinize different research endevors to deepen our understanding and create the best project design plan.'),
('image 3','eco-friendly design','images/3.png','Through understanding AutoCAD, you can build the basic design of software.'),
('image 4', 'eco-friendly design','images/4.png','Description of autoCAD'),
('image 5','eco-friendly design','images/5.png','Examples of AutoCAD implementation');

INSERT INTO data(imageTitle, imageCategory, imageURL, imageDescription)
VALUES('image 6', 'greenhouse emissions', 'images/6.png','An important aspect of Greenhouse Emissions and how computer science benefits from this is Quantum Computing, which could help revolutionize the fight for climate change immensely. Quantum Computers utilizes Quantum Physics and its principles to quickly solve problems that would be impossible for classic computers to solve. This plays a big factor in limiting global warming to the target temperature of 1.5 degrees C which in turn, helps reduce emission. But since Quantum computers are so powerful, they are extremely expensive, but this is something the country has to put a LOT of money towards since the computer holds a lot of power, bytes, and rams.'),
('image 11', 'greenhouse emissions', 'images/11.png','Here is another example of the benefits of Quantum Computing');
-- ('image 7','solar power benefits','images/7.png','Gathering information from research, here is a current hypothesis to make a solar computer'),
-- ('image 8','solar power benefits', 'images/8.png','Here is some more cool information about solar computers :)'),
-- ('image 9','energy efficiency','images/9.png','Computers are a source of a lot of energy, which can influence multiple things.'),
-- ('image 10', 'energy efficiency','images/10.png','Components of a computer and their average power consumption');
