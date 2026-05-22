const Treinador = require('../models/Treinador');
const Pokemon = require('../models/Pokemon');

async function index(req, res) {
  const treinador = await Treinador.findOne({
    include: [{ model: Pokemon, as: 'pokemons' }],
    order: [['id', 'ASC']],
  });

  res.render('treinador', {
    titulo: 'Perfil do Treinador',
    treinador,
  });
}

async function listar(req, res) {
  const treinadores = await Treinador.findAll({
    order: [['id', 'ASC']],
  });

  res.render('treinadores/index', {
    titulo: 'Treinadores',
    treinadores,
  });
}

function novo(req, res) {
  res.render('treinadores/form', {
    titulo: 'Novo Treinador',
    treinador: {},
    acao: 'criar',
  });
}

async function criar(req, res) {
  const { nome, idade, cidade, regiao, insignias, imagem } = req.body;

  await Treinador.create({
    nome,
    idade,
    cidade,
    regiao,
    insignias,
    imagem,
  });

  res.redirect('/treinadores');
}

async function ver(req, res) {
  const treinador = await Treinador.findByPk(req.params.id, {
    include: [{ model: Pokemon, as: 'pokemons' }],
  });

  res.render('treinadores/show', {
    titulo: treinador.nome,
    treinador,
  });
}

async function editar(req, res) {
  const treinador = await Treinador.findByPk(req.params.id);

  res.render('treinadores/form', {
    titulo: 'Editar Treinador',
    treinador,
    acao: 'editar',
  });
}

async function atualizar(req, res) {
  const { nome, idade, cidade, regiao, insignias, imagem } = req.body;

  await Treinador.update(
    {
      nome,
      idade,
      cidade,
      regiao,
      insignias,
      imagem,
    },
    {
      where: { id: req.params.id },
    }
  );

  res.redirect('/treinadores');
}

async function excluir(req, res) {
  await Treinador.destroy({
    where: { id: req.params.id },
  });

  res.redirect('/treinadores');
}

module.exports = {
  index,
  listar,
  novo,
  criar,
  ver,
  editar,
  atualizar,
  excluir,
};