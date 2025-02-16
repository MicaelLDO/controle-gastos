const express = require('express'); // Importa o Express
const app = express(); // Cria uma instância do Express
const port = 3000; // Define a porta do servidor
const path = require('path'); // Importa o módulo path para trabalhar com caminhos de arquivos

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Serve arquivos estáticos (como CSS, JS, imagens) da pasta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Importa as rotas
const pessoaRoutes = require('./routes/pessoaRoutes');
const transacaoRoutes = require('./routes/transacaoRoutes');
const totaisRoutes = require('./routes/totaisRoutes');

// Define as rotas
app.use('/pessoas', pessoaRoutes); // Rotas relacionadas a pessoas
app.use('/transacoes', transacaoRoutes); // Rotas relacionadas a transações
app.use('/totais', totaisRoutes); // Rotas relacionadas a totais

// Rota para servir a página inicial (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
