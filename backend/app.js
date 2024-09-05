const express = require('express');
const app = express();

// Configuração do Sequelize
const db = require('./config/database');

// Testar a conexão com o banco de dados
db.authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar com o banco de dados:', err));

// Middlewares
app.use(express.json());

// Importar rotas
const rotasUsuario = require('./rotas/rotasUsuario');
const rotasDenuncia = require('./rotas/rotasDenuncia');

// Usar rotas
app.use('/api', rotasUsuario);
app.use('/api', rotasDenuncia);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
``