CREATE TABLE Family (
  familyId int(11) NOT NULL AUTO_INCREMENT,
  familyName varchar(255) NOT NULL DEFAULT '',
  familyPassword varchar(255) NOT NULL DEFAULT '',

  PRIMARY KEY (familyId)
);

CREATE TABLE User (
  userId int(11) NOT NULL AUTO_INCREMENT,
  userName varchar(255) NOT NULL DEFAULT '',
  userPassword varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (userId)
);

CREATE TABLE User_Family (
  id int(11) NOT NULL AUTO_INCREMENT,
  familyId int(11) NOT NULL DEFAULT 0,
  userId int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  FOREIGN KEY (familyId) REFERENCES Family(familyId),
  FOREIGN KEY (userId) REFERENCES User(userId)
);