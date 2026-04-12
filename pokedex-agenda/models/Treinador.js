const treinador = {
  nome: 'Ash Ketchum',
  idade: 17,
  cidade: 'Pallet Town',
  regiao: 'Kanto',
  insignias: 8,
  pokemonsFavoritos: ['Pikachu', 'Charizard', 'Bulbasaur'],
  conquistas: [
    'Campeão da Liga de Kanto',
    'Campeão da Liga de Alola',
    'Campeão Mundial Pokémon',
  ],
  descricao: 'Treinador Pokémon determinado a se tornar o melhor de todos os tempos. Começou sua jornada aos 10 anos ao lado de seu fiel Pikachu.',
};

function get() {
  return treinador;
}

module.exports = { get };
