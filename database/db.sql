--Creamos la base de datos
CREATE DATABASE db_anve2;

--Usamos la bd
use db_anve2;

--Creamos tablas
CREATE TABLE usuarios(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR (15)
);
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR (15)
);

--show tables
SHOW TABLES;

--Describimos la tabla
describe usuarios;