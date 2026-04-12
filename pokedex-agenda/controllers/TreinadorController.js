const Treinador = require('../models/Treinador');

function index(req, res) {
  const treinador = Treinador.get();

  res.render('treinador', {
    titulo: 'Perfil do Treinador',
    treinador,
  });
}

module.exports = { index };
