// CONTROLLER - TreinadorController.js
// Responsável pela lógica da página de perfil do treinador

const TreinadorModel = require('../models/Treinador');

function index(req, res) {
  const treinador = Treinador.get();

  res.render('perfil', {
    titulo: 'Perfil do Treinador',
    treinador,
  });
}

module.exports = { index };
