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