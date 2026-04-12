const batalhas = [
  { id: 1, pokemon1: 'Charizard',  pokemon2: 'Blastoise',  vencedor: 'Blastoise',  local: 'Cerulean City',  ano: 2023 },
  { id: 2, pokemon1: 'Pikachu',    pokemon2: 'Raichu',     vencedor: 'Pikachu',    local: 'Viridian City',  ano: 2023 },
  { id: 3, pokemon1: 'Mewtwo',     pokemon2: 'Mew',        vencedor: 'Empate',     local: 'Cerulean Cave',  ano: 2022 },
  { id: 4, pokemon1: 'Gengar',     pokemon2: 'Alakazam',   vencedor: 'Gengar',     local: 'Lavender Town',  ano: 2024 },
  { id: 5, pokemon1: 'Snorlax',    pokemon2: 'Machamp',    vencedor: 'Snorlax',    local: 'Vermilion City', ano: 2024 },
  { id: 6, pokemon1: 'Bulbasaur',  pokemon2: 'Charmander', vencedor: 'Bulbasaur',  local: 'Pallet Town',    ano: 2022 },
  { id: 7, pokemon1: 'Gyarados',   pokemon2: 'Dragonite',  vencedor: 'Dragonite',  local: "Dragon's Den",   ano: 2023 },
];


function getAll() {
  return batalhas;
}

function getByAno(ano) {
  return batalhas.filter(b => b.ano === parseInt(ano));
}

module.exports = { getAll, getByAno };
