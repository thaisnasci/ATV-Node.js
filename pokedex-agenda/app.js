const express = require('express');
const app = express();
const PORT = 3000;

// Configuração do EJS como template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Arquivos estáticos (CSS, imagens)
app.use(express.static('public'));

// =============================================
// IMPORTAÇÃO DOS CONTROLLERS
// =============================================
const HomeController      = require('./controllers/HomeController');
const PokemonController   = require('./controllers/PokemonController');
const BatalhaController   = require('./controllers/BatalhaController');
const TreinadorController = require('./controllers/TreinadorController');

// =============================================
// ROTAS
// =============================================
app.get('/',         HomeController.index);
app.get('/pokedex',  PokemonController.index);
app.get('/batalhas', BatalhaController.index);
app.get('/treinador', TreinadorController.index);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
