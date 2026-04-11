// CONTROLLER - HomeController.js
// Responsável pela lógica da página inicial

const PokemonModel = require('../models/Pokemon');
const BatalhaModel = require('../models/Batalha');

function index(req, res) {
  const totalPokemons = Pokemon.getAll().length;
  const totalBatalhas = Batalha.getAll().length;

  res.render('index', {
    titulo: 'Pokédex - Mundo Pokémon',
    totalPokemons,
    totalBatalhas,
  });
}

module.exports = { index };
