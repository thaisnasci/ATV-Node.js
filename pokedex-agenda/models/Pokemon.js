const pokemons = [
  { id: 1,   nome: 'Bulbasaur',   tipo1: 'Planta',   tipo2: 'Veneno',  hp: 45,  ataque: 49,  defesa: 49,  velocidade: 45,  geracao: 1 },
  { id: 4,   nome: 'Charmander',  tipo1: 'Fogo',     tipo2: '-',       hp: 39,  ataque: 52,  defesa: 43,  velocidade: 65,  geracao: 1 },
  { id: 7,   nome: 'Squirtle',    tipo1: 'Água',     tipo2: '-',       hp: 44,  ataque: 48,  defesa: 65,  velocidade: 43,  geracao: 1 },
  { id: 25,  nome: 'Pikachu',     tipo1: 'Elétrico', tipo2: '-',       hp: 35,  ataque: 55,  defesa: 40,  velocidade: 90,  geracao: 1 },
  { id: 39,  nome: 'Jigglypuff',  tipo1: 'Normal',   tipo2: 'Fada',    hp: 115, ataque: 45,  defesa: 20,  velocidade: 20,  geracao: 1 },
  { id: 94,  nome: 'Gengar',      tipo1: 'Fantasma', tipo2: 'Veneno',  hp: 60,  ataque: 65,  defesa: 60,  velocidade: 110, geracao: 1 },
  { id: 143, nome: 'Snorlax',     tipo1: 'Normal',   tipo2: '-',       hp: 160, ataque: 110, defesa: 65,  velocidade: 30,  geracao: 1 },
  { id: 150, nome: 'Mewtwo',      tipo1: 'Psíquico', tipo2: '-',       hp: 106, ataque: 110, defesa: 90,  velocidade: 130, geracao: 1 },
];

function getAll() {
  return pokemons;
}

function getById(id) {
  return pokemons.find(p => p.id === parseInt(id));
}

module.exports = { getAll, getById };
