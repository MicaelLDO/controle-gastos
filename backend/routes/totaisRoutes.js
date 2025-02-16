const express = require('express'); // Importa o Express
const router = express.Router(); // Cria um roteador
const totaisController = require('../controllers/totaisController'); // Importa o controlador de totais

// Rota para consultar os totais
router.get('/', totaisController.consultarTotais);

module.exports = router; // Exporta o roteador
