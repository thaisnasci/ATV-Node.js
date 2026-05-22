const { DataTypes } = require('sequelize');
const { connection } = require('../config/sequelize-config');
const Treinador = require('./Treinador');

const Pokemon = connection.define('pokemons', {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo2: {
    type: DataTypes.STRING,
    defaultValue: '-',
  },
  hp: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ataque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  defesa: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  velocidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  geracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  treinador_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Treinador,
      key: 'id',
    },
  },
});

Pokemon.belongsTo(Treinador, { foreignKey: 'treinador_id', as: 'treinador' });
Treinador.hasMany(Pokemon, { foreignKey: 'treinador_id', as: 'pokemons' });

module.exports = Pokemon;
