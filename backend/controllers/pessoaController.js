const pessoaService = require('../services/pessoaService'); // Importa o serviço de pessoas

// Função para cadastrar uma pessoa
exports.cadastrarPessoa = (req, res) => {
    const { nome, idade } = req.body; // Extrai nome e idade do corpo da requisição

    // Validação dos dados
    if (!nome || !idade || typeof idade !== 'number') {
        return res.status(400).json({ error: 'Nome e idade são obrigatórios e idade deve ser um número inteiro.' });
    }

    // Cadastra a pessoa usando o serviço
    const novaPessoa = pessoaService.cadastrarPessoa(nome, idade);
    res.status(201).json(novaPessoa); // Retorna a pessoa cadastrada
};

// Função para listar todas as pessoas
exports.listarPessoas = (req, res) => {
    const pessoas = pessoaService.listarPessoas(); // Obtém a lista de pessoas
    res.json(pessoas); // Retorna a lista de pessoas
};