let transacoes = []; // Array para armazenar as transações
let transacaoId = 1; // Contador de IDs

// Função para cadastrar uma transação
exports.cadastrarTransacao = (descricao, valor, tipo, pessoa) => {
    const novaTransacao = { id: transacaoId++, descricao, valor, tipo, pessoa }; // Cria uma nova transação
    transacoes.push(novaTransacao); // Adiciona a transação ao array
    return novaTransacao; // Retorna a transação cadastrada
};

// Função para listar todas as transações
exports.listarTransacoes = () => {
    return transacoes; // Retorna o array de transações
};
