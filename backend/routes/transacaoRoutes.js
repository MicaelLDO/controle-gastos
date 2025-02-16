const express = require('express'); // Importa o Express
const router = express.Router(); // Cria um roteador
const transacaoController = require('../controllers/transacaoController'); // Importa o controlador de transações

// Rota para cadastrar uma transação
router.post('/', transacaoController.cadastrarTransacao);

// Rota para listar todas as transações
router.get('/', transacaoController.listarTransacoes);

module.exports = router; // Exporta o roteador