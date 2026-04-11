# 🔴 ATV-01-Node.js — PokémonSite (MVC)

Site desenvolvido com **Node.js**, **Express** e **EJS** seguindo o padrão **MVC** (Model, View, Controller).

---

## 🚀 Como Rodar

```bash
npm install
npm start
```
Acesse: `http://localhost:3000`

---

## 📁 Estrutura MVC

```
pokemon-site/
├── app.js                        ← Entrada da aplicação (rotas)
├── package.json
│
├── models/                       ← MODEL: dados da aplicação
│   ├── PokemonModel.js           ← Dados e funções dos Pokémons
│   ├── BatalhaModel.js           ← Dados e funções das batalhas
│   └── TreinadorModel.js         ← Dados do perfil do treinador
│
├── controllers/                  ← CONTROLLER: lógica de negócio
│   ├── HomeController.js         ← Lógica da página inicial
│   ├── PokemonController.js      ← Lógica da Pokédex
│   ├── BatalhaController.js      ← Lógica das batalhas
│   └── TreinadorController.js    ← Lógica do perfil
│
├── views/                        ← VIEW: páginas HTML (EJS)
│   ├── index.ejs                 ← Página inicial
│   ├── pokedex.ejs               ← Página da Pokédex
│   ├── batalhas.ejs              ← Página de batalhas
│   ├── perfil.ejs                ← Página de perfil
│   └── partials/
│       ├── navbar.ejs            ← Menu de navegação
│       └── footer.ejs            ← Rodapé
│
└── public/
    └── css/
        └── style.css             ← Estilos customizados
```

---

## 🔄 Como o MVC funciona neste projeto

| Camada | Arquivo | Responsabilidade |
|---|---|---|
| **Model** | `PokemonModel.js` | Armazena e retorna os dados dos Pokémons |
| **Model** | `BatalhaModel.js` | Armazena e retorna os dados das batalhas |
| **Model** | `TreinadorModel.js` | Armazena e retorna os dados do treinador |
| **Controller** | `HomeController.js` | Busca dados e envia para a view `index` |
| **Controller** | `PokemonController.js` | Busca dados e envia para a view `pokedex` |
| **Controller** | `BatalhaController.js` | Busca dados e envia para a view `batalhas` |
| **Controller** | `TreinadorController.js` | Busca dados e envia para a view `perfil` |
| **View** | `*.ejs` | Exibe os dados recebidos do Controller |

---

## 🗺️ Rotas

| Rota | Controller | View |
|---|---|---|
| `/` | HomeController.index | index.ejs |
| `/pokedex` | PokemonController.index | pokedex.ejs |
| `/batalhas` | BatalhaController.index | batalhas.ejs |
| `/perfil` | TreinadorController.index | perfil.ejs |

---

## 📦 Dependências

- **express** — Framework web
- **ejs** — Template engine
- **nodemon** — Reinício automático (dev)
