const express = require('express');
const app = express();
const PORT = 3000;


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));


const HomeController      = require('./controllers/HomeController');
const PokemonController   = require('./controllers/PokemonController');
const BatalhaController   = require('./controllers/BatalhaController');
const TreinadorController = require('./controllers/TreinadorController');


app.get('/', HomeController.index);
app.get('/pokedex', PokemonController.index);
app.get('/batalhas', BatalhaController.index);
app.get('/treinador', TreinadorController.index);


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
