let pessoas = []; // Array para armazenar as pessoas
let pessoaId = 1; // Contador de IDs

// Função para cadastrar uma pessoa
exports.cadastrarPessoa = (nome, idade) => {
    const novaPessoa = { id: pessoaId++, nome, idade }; // Cria uma nova pessoa
    pessoas.push(novaPessoa); // Adiciona a pessoa ao array
    return novaPessoa; // Retorna a pessoa cadastrada
};

// Função para listar todas as pessoas
exports.listarPessoas = () => {
    return pessoas; // Retorna o array de pessoas
};

// Função para buscar uma pessoa por ID
exports.buscarPessoaPorId = (id) => {
    return pessoas.find(p => p.id === id); // Retorna a pessoa com o ID correspondente
};