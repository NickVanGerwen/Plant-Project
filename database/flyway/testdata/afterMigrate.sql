-- SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO';
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE User;
TRUNCATE TABLE Family;
TRUNCATE TABLE User_Family;

INSERT INTO User VALUES (1, 'Joost', '123'), (2, 'Freek', 'psswrd'), (3, 'Joseph', 'aaa'), (4, 'peter', 'jaja');

INSERT INTO Family VALUES (1, 'Jansen', '123'), (2, 'Opa en Oma', 'test');

INSERT INTO User_Family VALUES (1, 1, 1), (2, 1, 2), (3, 2, 1), (4, 3, 1);





