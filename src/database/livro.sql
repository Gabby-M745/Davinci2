create database livraria;
use livraria;
create table livro (idLivro int primary key auto_increment,
titulo varchar(45) not null,
autor varchar(45) not null,
compraPr decimal(5,2),
vendaPr decimal(5,2), 
quantidade int, /*numeric*/ /*quantidade em estoque*/
fkGenero int,
foreign key (fkGenero) references genero(idGenero)/*muitos livros podem pertencer apenas a um genero*/
);

create table genero(idGenero int primary key auto_increment,
nome varchar(45) not null 
/*constraint nomecheck check (nome in('fantasia','poesia','horror','romance'))*/
);

insert into genero values /*(nome)  */
('fantasia'),
('poesia'),
('horror'),
('romance');

