const totaisService = require('../services/totaisService'); // Importa o serviço de totais

// Função para consultar os totais
exports.consultarTotais = (req, res) => {
    const relatorio = totaisService.consultarTotais(); // Obtém o relatório de totais
    res.json(relatorio); // Retorna o relatório
};