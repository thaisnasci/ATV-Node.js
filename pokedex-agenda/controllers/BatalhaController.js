const Batalha = require('../models/Batalha');

function index(req, res) {
  const batalhas = Batalha.getAll();

  res.render('batalhas', {
    titulo: 'Histórico de Batalhas',
    batalhas,
  });
}

module.exports = { index };
