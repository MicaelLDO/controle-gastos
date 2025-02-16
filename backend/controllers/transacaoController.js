const transacaoService = require('../services/transacaoService'); // Importa o serviço de transações
const pessoaService = require('../services/pessoaService'); // Importa o serviço de pessoas

// Função para cadastrar uma transação
exports.cadastrarTransacao = (req, res) => {
    const { descricao, valor, tipo, pessoa } = req.body; // Extrai os dados do corpo da requisição

    // Validação dos dados
    if (!descricao || !valor || !tipo || !pessoa) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    if (valor <= 0) {
        return res.status(400).json({ error: 'O valor deve ser positivo.' });
    }

    const tiposAceitos = ['despesa', 'receita'];
    
    if (!tiposAceitos.includes(tipo)) {
        return res.status(400).json({ error: 'O tipo deve ser "despesa" ou "receita".' });
    }

    // Verifica se a pessoa existe
    const pessoaEncontrada = pessoaService.buscarPessoaPorId(pessoa);
    if (!pessoaEncontrada) {
        return res.status(400).json({ error: 'Pessoa não encontrada.' });
    }

    // Validação para menores de idade
    if (pessoaEncontrada.idade < 18 && tipo === 'receita') {
        return res.status(400).json({ error: 'Menores de idade só podem registrar despesas.' });
    }

    // Cadastra a transação usando o serviço
    const novaTransacao = transacaoService.cadastrarTransacao(descricao, valor, tipo, pessoaEncontrada.id);
    res.status(201).json(novaTransacao); // Retorna a transação cadastrada
};

// Função para listar todas as transações
exports.listarTransacoes = (req, res) => {
    const transacoes = transacaoService.listarTransacoes(); // Obtém a lista de transações
    res.json(transacoes); // Retorna a lista de transações
};