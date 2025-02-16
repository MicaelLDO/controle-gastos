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

2. Navegue até a pasta do projeto:
   ```bash
   cd controle-gastos
   
3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   npm start
   
5. Acesse a aplicação no navegador:
   
   Abra o navegador e acesse:
   ```bash
   http://localhost:3000   
      
## Melhorias Futuras

- **Persistência de Dados**: Integrar um banco de dados (como SQLite ou MongoDB) para armazenar os dados permanentemente.
- **Edição e Exclusão**: Adicionar funcionalidades para editar e excluir pessoas e transações.
- **Autenticação**: Implementar um sistema de autenticação para proteger o acesso à aplicação.
- **Interface Melhorada**: Utilizar uma biblioteca como Bootstrap ou Materialize para melhorar a interface do usuário.
- **TypeScript**: Migrar o código para TypeScript para adicionar tipagem estática e melhorar a manutenção.
- **React**: Refatorar o frontend utilizando React para uma experiência mais dinâmica e moderna.

---

## Aprendizados

- **Express**: Aprendi a criar uma API simples com rotas, middlewares e manipulação de requisições/respostas.
- **Organização de Código**: A estruturação do projeto em pastas (controllers, routes, services) ajudou a manter o código organizado e modular.
- **Validações**: Implementei validações no backend para garantir a integridade dos dados.
- **Comunicação Frontend-Backend**: Utilizei `fetch` no JavaScript para enviar e receber dados do backend.

---

## Contato

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- **Nome**: [Micael Dorneles]
- **E-mail**: [micaeldorneleslp@gmail.com]
- **GitHub**: [MicaelLDO](https://github.com/MicaelLDO)
