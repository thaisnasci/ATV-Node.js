const Pokemon = require('../models/Pokemon');
const Treinador = require('../models/Treinador');

async function index(req, res) {
  const pokemons = await Pokemon.findAll({
    include: [{ model: Treinador, as: 'treinador' }],
    order: [['numero', 'ASC']],
  });

  res.render('pokedex', {
    titulo: 'Pokédex - Lista de Pokémons',
    pokemons,
  });
}

function novo(req, res) {
  Treinador.findAll().then((treinadores) => {
    res.render('pokemons/form', {
      titulo: 'Novo Pokémon',
      pokemon: {},
      treinadores,
      acao: 'criar',
    });
  });
}

async function criar(req, res) {
  const { numero, nome, tipo1, tipo2, hp, ataque, defesa, velocidade, geracao, treinador_id } = req.body;

  await Pokemon.create({
    numero,
    nome,
    tipo1,
    tipo2: tipo2 || '-',
    hp,
    ataque,
    defesa,
    velocidade,
    geracao,
    treinador_id,
  });

  res.redirect('/pokedex');
}

async function editar(req, res) {
  const pokemon = await Pokemon.findByPk(req.params.id);
  const treinadores = await Treinador.findAll();

  res.render('pokemons/form', {
    titulo: 'Editar Pokémon',
    pokemon,
    treinadores,
    acao: 'editar',
  });
}

async function atualizar(req, res) {
  const { numero, nome, tipo1, tipo2, hp, ataque, defesa, velocidade, geracao, treinador_id } = req.body;

  await Pokemon.update(
    { numero, nome, tipo1, tipo2: tipo2 || '-', hp, ataque, defesa, velocidade, geracao, treinador_id },
    { where: { id: req.params.id } }
  );

  res.redirect('/pokedex');
}

async function excluir(req, res) {
  await Pokemon.destroy({ where: { id: req.params.id } });
  res.redirect('/pokedex');
}

module.exports = { index, novo, criar, editar, atualizar, excluir };
