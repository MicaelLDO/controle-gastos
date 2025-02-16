const express = require('express'); // Importa o Express
const router = express.Router(); // Cria um roteador
const pessoaController = require('../controllers/pessoaController'); // Importa o controlador de pessoas

// Rota para cadastrar uma pessoa
router.post('/', pessoaController.cadastrarPessoa);

// Rota para listar todas as pessoas
router.get('/', pessoaController.listarPessoas);

module.exports = router; // Exporta o roteador
