create database burgersDb;
use burgersDB;
create table burgers (
  id int(11) auto_increment primary key,
  burger varchar(255) not null,
  devoured boolean
);
