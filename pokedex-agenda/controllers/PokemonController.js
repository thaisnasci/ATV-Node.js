// CONTROLLER - PokemonController.js
// Responsável pela lógica da página de Pokémons (Pokédex)

const PokemonModel = require('../models/Pokemon');

function index(req, res) {
  const pokemons = Pokemon.getAll();

  res.render('pokedex', {
    titulo: 'Pokédex - Lista de Pokémons',
    pokemons,
  });
}

module.exports = { index };
