# ATV-01-Node.js

# Projeto Pokédex Pokémon

Aplicação web desenvolvida com Node.js, Express, Sequelize, MySQL e EJS utilizando arquitetura MVC.

## Funcionalidades

- Página inicial estilizada
- Pokédex com listagem de Pokémons
- Cadastro de Pokémons
- Edição e exclusão de Pokémons
- Histórico de batalhas Pokémon
- Perfil do treinador
- Cadastro de treinadores
- Associação entre treinadores e Pokémons
- Sistema integrado com banco de dados MySQL
- Interface responsiva inspirada no universo Pokémon

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- EJS
- HTML5
- CSS3
- JavaScript

## Arquitetura

O projeto foi desenvolvido utilizando o padrão MVC:

Models: gerenciamento dos dados  
Views: interface visual com EJS  
Controllers: regras de negócio e controle das rotas

## Banco de Dados

O sistema utiliza MySQL com Sequelize ORM.

Banco utilizado:

CREATE DATABASE pokedex;

## Como Executar o Projeto

1. Clone o repositório:

git clone https://github.com/seu-repositorio.git

2. Acesse a pasta do projeto:

cd nome-do-projeto

3. Instale as dependências:

npm install

4. Configure o banco MySQL:

CREATE DATABASE pokedex;

5. Execute o projeto:

npm start

## Servidor

O servidor iniciará em:

http://localhost:8080

## Estrutura do Projeto

config
controllers
models
public
public/css
public/img
routes
views
views/partials
views/treinadores
app.js

## Funcionalidades do Sistema

Pokédex:
Visualização de Pokémons, cadastro, edição e exclusão.

Treinadores:
Cadastro de treinadores, perfil detalhado, associação de Pokémons e imagens personalizadas.

Batalhas:
Histórico de batalhas Pokémon e simulação de confrontos.

## Observação

Os dados, batalhas e informações foram simulados considerando as mecânicas de tipos e o universo Pokémon.
