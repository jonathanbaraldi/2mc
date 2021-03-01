
drop table files.book;
drop table files.song;
drop table files.video;


CREATE DATABASE files;

CREATE TABLE files.book ( 
	id SERIAL PRIMARY KEY, 
	BookName TEXT NOT NULL, 
	AuthorName TEXT NOT NULL, 
	Price REAL
); 


CREATE TABLE files.song ( 
	id SERIAL PRIMARY KEY, 
	SongName TEXT NOT NULL, 
	AuthorName TEXT NOT NULL, 
	Price REAL
); 


CREATE TABLE files.video ( 
	id SERIAL PRIMARY KEY, 
	VideoName TEXT NOT NULL, 
	AuthorName TEXT NOT NULL, 
	Price REAL
); 





