const { DataTypes } = require('sequelize');
const { connection } = require('../config/sequelize-config');

const Treinador = connection.define('treinadores', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regiao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  insignias: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  imagem: {
    type: DataTypes.STRING,
    defaultValue: 'ash.png',
  },
});

module.exports = Treinador;