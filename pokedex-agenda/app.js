const express = require('express');
const app = express();
const PORT = 8080;

const { connection, createDatabaseIfNotExists } = require('./config/sequelize-config');
const Pokemon = require('./models/Pokemon');
const Treinador = require('./models/Treinador');

const HomeController = require('./controllers/HomeController');
const PokemonController = require('./controllers/PokemonController');
const BatalhaController = require('./controllers/BatalhaController');
const TreinadorController = require('./controllers/TreinadorController');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', HomeController.index);

app.get('/pokedex', PokemonController.index);
app.get('/pokemons/novo', PokemonController.novo);
app.post('/pokemons/new', PokemonController.criar);
app.get('/pokemons/edit/:id', PokemonController.editar);
app.post('/pokemons/update/:id', PokemonController.atualizar);
app.get('/pokemons/delete/:id', PokemonController.excluir);

app.get('/batalhas', BatalhaController.index);

app.get('/treinador', TreinadorController.index);
app.get('/treinadores', TreinadorController.listar);
app.get('/treinadores/novo', TreinadorController.novo);
app.post('/treinadores/new', TreinadorController.criar);
app.get('/treinadores/ver/:id', TreinadorController.ver);
app.get('/treinadores/edit/:id', TreinadorController.editar);
app.post('/treinadores/update/:id', TreinadorController.atualizar);
app.get('/treinadores/delete/:id', TreinadorController.excluir);

async function seedInitialData() {
  const totalTreinadores = await Treinador.count();
  const totalPokemons = await Pokemon.count();

  if (totalTreinadores === 0) {
    await Treinador.bulkCreate([
      { nome: 'Ash Ketchum', idade: 17, cidade: 'Pallet Town', regiao: 'Kanto', insignias: 8 },
      { nome: 'Misty', idade: 18, cidade: 'Cerulean City', regiao: 'Kanto', insignias: 4 },
      { nome: 'Brock', idade: 20, cidade: 'Pewter City', regiao: 'Kanto', insignias: 5 },
    ]);
  }

  if (totalPokemons === 0) {
    const ash = await Treinador.findOne({ where: { nome: 'Ash Ketchum' } });
    const misty = await Treinador.findOne({ where: { nome: 'Misty' } });
    const brock = await Treinador.findOne({ where: { nome: 'Brock' } });

    await Pokemon.bulkCreate([
      { numero: 1, nome: 'Bulbasaur', tipo1: 'Planta', tipo2: 'Veneno', hp: 45, ataque: 49, defesa: 49, velocidade: 45, geracao: 1, treinador_id: ash.id },
      { numero: 4, nome: 'Charmander', tipo1: 'Fogo', tipo2: '-', hp: 39, ataque: 52, defesa: 43, velocidade: 65, geracao: 1, treinador_id: ash.id },
      { numero: 7, nome: 'Squirtle', tipo1: 'Água', tipo2: '-', hp: 44, ataque: 48, defesa: 65, velocidade: 43, geracao: 1, treinador_id: misty.id },
      { numero: 25, nome: 'Pikachu', tipo1: 'Elétrico', tipo2: '-', hp: 35, ataque: 55, defesa: 40, velocidade: 90, geracao: 1, treinador_id: ash.id },
      { numero: 39, nome: 'Jigglypuff', tipo1: 'Normal', tipo2: 'Fada', hp: 115, ataque: 45, defesa: 20, velocidade: 20, geracao: 1, treinador_id: misty.id },
      { numero: 94, nome: 'Gengar', tipo1: 'Fantasma', tipo2: 'Veneno', hp: 60, ataque: 65, defesa: 60, velocidade: 110, geracao: 1, treinador_id: brock.id },
      { numero: 143, nome: 'Snorlax', tipo1: 'Normal', tipo2: '-', hp: 160, ataque: 110, defesa: 65, velocidade: 30, geracao: 1, treinador_id: ash.id },
      { numero: 150, nome: 'Mewtwo', tipo1: 'Psíquico', tipo2: '-', hp: 106, ataque: 110, defesa: 90, velocidade: 130, geracao: 1, treinador_id: brock.id },
    ]);
  }
}

async function startServer() {
  try {
    await createDatabaseIfNotExists();
    await connection.authenticate();
    await connection.sync({ alter: false });
    await seedInitialData();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
      console.log('Conexão com o banco de dados feita com sucesso!');
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
}

startServer();
