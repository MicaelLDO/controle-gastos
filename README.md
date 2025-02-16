# Controle de Gastos

Este é um projeto simples de controle de gastos, desenvolvido utilizando **JavaScript**, **HTML** e **CSS**. O backend foi construído com o framework **Express**, e o frontend é uma aplicação estática que se comunica com o backend via requisições HTTP.

## Tecnologias Utilizadas

### Frontend
- **HTML**: Para a estrutura da página.
- **CSS**: Para estilização e layout.
- **JavaScript**: Para interatividade e comunicação com o backend.

### Backend
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework para criar a API e gerenciar rotas.
- **JavaScript**: Lógica de negócio e manipulação de dados.

### Por que essas tecnologias?
- **JavaScript, HTML e CSS**: Optei por utilizar essas tecnologias por possuir mais conhecimento nelas, o que me permitiu entregar um programa mais sólido e funcional.
- **Express**: Decidi utilizar o Express para melhorar meus conhecimentos sobre a ferramenta, já que estou em processo de aprendizado.
- **Sem TypeScript e React**: Optei por não utilizar TypeScript e React devido à falta de conhecimento suficiente para entregar um resultado de qualidade. Já utilizei TypeScript antes, mas não me sinto confortável o suficiente para aplicá-lo em um projeto completo. Quanto ao React, meu conhecimento é muito básico, e preferi focar em tecnologias que domino melhor.

---

## Funcionalidades

### Cadastro de Pessoas
- Cadastre pessoas com nome e idade.
- Validação de campos obrigatórios e tipo de dados.

### Cadastro de Transações
- Cadastre transações com descrição, valor, tipo (receita ou despesa) e vinculação a uma pessoa.
- Validação de campos obrigatórios, valor positivo e tipo de transação.
- Restrição para menores de idade: só podem cadastrar despesas.

### Consulta de Totais
- Consulte o relatório de totais por pessoa, incluindo:
  - Total de receitas.
  - Total de despesas.
  - Saldo (receitas - despesas).
- Consulte os totais gerais:
  - Total de receitas.
  - Total de despesas.
  - Saldo líquido.

---

## Estrutura do Projeto

### Backend
- **`server.js`**: Ponto de entrada do servidor. Configura o Express e define as rotas.
- **`controllers/`**: Contém a lógica para manipular as requisições.
  - `pessoaController.js`: Lógica para cadastro e listagem de pessoas.
  - `transacaoController.js`: Lógica para cadastro e listagem de transações.
  - `totaisController.js`: Lógica para consulta de totais.
- **`routes/`**: Define as rotas da API.
  - `pessoaRoutes.js`: Rotas relacionadas a pessoas.
  - `transacaoRoutes.js`: Rotas relacionadas a transações.
  - `totaisRoutes.js`: Rota para consulta de totais.
- **`services/`**: Contém a lógica de negócio.
  - `pessoaService.js`: Gerencia o cadastro e listagem de pessoas.
  - `transacaoService.js`: Gerencia o cadastro e listagem de transações.
  - `totaisService.js`: Calcula os totais de receitas, despesas e saldos.

### Frontend
- **`index.html`**: Página principal da aplicação.
- **`styles/style.css`**: Estilos CSS para a aplicação.

---

## Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 14 ou superior).
- NPM ou Yarn para gerenciamento de dependências.

### Passos
1. Clone o repositório:
   ```bash
   git clone https://github.com/MicaelLDO/controle-gastos.git
