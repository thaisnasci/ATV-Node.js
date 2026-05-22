const Pokemon = require('../models/Pokemon');
const Treinador = require('../models/Treinador');
const Batalha = require('../models/Batalha');

async function index(req, res) {
  const totalPokemons = await Pokemon.count();
  const totalTreinadores = await Treinador.count();
  const totalBatalhas = Batalha.getAll().length;

  res.render('index', {
    titulo: 'Pokédex - Mundo Pokémon',
    totalPokemons,
    totalTreinadores,
    totalBatalhas,
  });
}

module.exports = { index };
