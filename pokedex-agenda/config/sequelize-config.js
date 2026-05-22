const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

const DB_NAME = 'pokedex';
const DB_USER = 'root';
const DB_PASSWORD = ''; 
const DB_HOST = 'localhost';

async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
  await connection.end();
}

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  timezone: '-03:00',
  logging: false,
});

module.exports = { connection, createDatabaseIfNotExists };
