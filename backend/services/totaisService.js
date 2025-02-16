const pessoaService = require('./pessoaService'); // Importa o serviço de pessoas
const transacaoService = require('./transacaoService'); // Importa o serviço de transações

// Função para consultar os totais
exports.consultarTotais = () => {
    const pessoas = pessoaService.listarPessoas(); // Obtém a lista de pessoas
    const transacoes = transacaoService.listarTransacoes(); // Obtém a lista de transações

    let totalReceitas = 0; // Total de receitas
    let totalDespesas = 0; // Total de despesas

    // Calcula os totais para cada pessoa
    const relatorio = pessoas.map(pessoa => {
        
        // fiz o encadeamento de duas funcoes, filter e reduce.
        // primeiramente filtrando cada tipo de transacao e agrupando-as, para na sequencia com o reduce,
        // extrair o somatorio total das mesmas
        const receitas = transacoes
            .filter(t => t.pessoa === pessoa.id && t.tipo === 'receita') 
            .reduce((acc, t) => acc + t.valor, 0); 

        const despesas = transacoes
            .filter(t => t.pessoa === pessoa.id && t.tipo === 'despesa') 
            .reduce((acc, t) => acc + t.valor, 0); 

        totalReceitas += receitas; // Atualiza o total de receitas
        totalDespesas += despesas; // Atualiza o total de despesas

        return { id: pessoa.id, nome: pessoa.nome, receitas, despesas, saldo: receitas - despesas }; // Retorna o relatório da pessoa
    });

    // Retorna o relatório e os totais gerais
    return {
        relatorio,
        totalGeral: {
            totalReceitas,
            totalDespesas,
            saldoLiquido: totalReceitas - totalDespesas
        }
    };
};