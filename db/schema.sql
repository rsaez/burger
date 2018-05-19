-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS burgers_DB;
-- Creates the "animals_db" database --
CREATE DATABASE burgers_DB;

-- Makes it so all of the following code will affect animals_db --
USE burgers_DB;

-- Creates the table  --
CREATE TABLE burgers (
  -- Makes a string column called "name" which cannot contain null --
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Create a string column  --
  burger VARCHAR(30) NOT NULL,
  
  devoured BOOLEAN NOT NULL DEFAULT false,
  
  PRIMARY KEY (id)
  
);