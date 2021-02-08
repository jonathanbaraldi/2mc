
drop table books.book;

CREATE DATABASE books;


CREATE TABLE books.book ( 
	id SERIAL PRIMARY KEY, 
	BookName TEXT NOT NULL, 
	AuthorName TEXT NOT NULL, 
	Price REAL
); 



SELECT * FROM books.book;

INSERT INTO books.book VALUES (1,"My first autoscalling app","YourName","69");

