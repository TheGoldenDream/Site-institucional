create database TGD;

use TGD;

create table usuario(
idUser int primary key auto_increment,
userName varchar(50) unique,
emailUser varchar(100) unique,
celularUser varchar(15) unique,
senhaUser varchar(250),
dataCadastro datetime default now()
);

create table pontuacao(
idPontuacao int primary key auto_increment,
pontuacao int,
fkUsuario int,
constraint fkUserPont foreign key (fkUsuario) references usuario (idUser)
);

create table jogadores(
id int primary key auto_increment,
nome varchar (100),
gols int,
partidasJogadas int,
golsUmaEdicao int
);


create table selecoes(
id int primary key auto_increment,
selecao varchar(40),
titulos int,
golsUmaEdicao int,
Participacoes int
);

insert into jogadores values 
	(null, 'Miroslav Klose', 16, 24, 5),
    (null, 'Ronaldo', 15, 19, 8),
    (null, 'Gerd Müller', 14, 13, 10),
    (null, 'Just Fontaine', 13, 6, 13),
    (null, 'Lionel Messi', 13, 26, 7),
    
    (null, 'Lothar Matthäus', 6, 25, null),
    (null, 'Cristiano Ronaldo', 8, 22, null),
    (null, 'Uwe Seeler', 9, 21, null),
    
    (null, 'Sándor Kocsis', 11, 6, 11),
    (null, 'Ademir de Menezes', 9, 6, 9),
    (null, 'Eusébio', 9, 6, 9);
    
insert into selecoes values 
	(null, 'Brasil', 5, 22, 22),
	(null, 'Alemanha', 4, 25, 20),
	(null, 'Itália', 4, 12, 18),
	(null, 'Argentina', 3, 18, 18),
	(null, 'França', 2, 23, 16),
    
	(null, 'Hungria', 0, 27, 9),

	(null, 'México', 0, 12, 17);
    
 