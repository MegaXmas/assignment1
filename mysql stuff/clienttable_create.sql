CREATE TABLE client (
	id CHAR(36) NOT NULL,
	name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	mobile int NOT NULL,
	password varchar(255) NOT NULL,
	PRIMARY KEY(id)
);