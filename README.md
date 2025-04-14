 
# 🤖 Chatbot Telegram PPGLETRAS

Este projeto é um chatbot desenvolvido em **Node.js** com a biblioteca **Telegraf.js**, voltado para o atendimento de dúvidas acadêmicas relacionadas ao Programa de Pós-Graduação em Letras (PPGLETRAS/UEMS), utilizando o Telegram como plataforma de comunicação.

---

## 📌 Objetivo

Oferecer uma solução acessível e automatizada para facilitar o acesso a informações importantes para alunos, futuros alunos e a comunidade em geral, como:

- Processo seletivo
- Documentação
- Disciplinas
- Informações institucionais
- Contato da secretaria

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Telegraf.js](https://telegraf.js.org/)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- Base de dados em formato **JSON**

---

## 🛠️ Instalação e execução local

1. Clone o repositório:

git clone https://github.com/neandraw/chatbot-telegram-ppgletras.git

2. Acesse a pasta do projeto:

cd chatbot-telegram-ppgletras

3. Instale as dependências:

npm install

4. Configure o token do seu bot no Telegram:

No arquivo index.js, substitua o token real:

const bot = new Telegraf('SEU_TOKEN_DO_BOT_AQUI');

5. Execute o bot:
node index.js

✅ Como usar
Inicie o bot no Telegram com o comando /start

O bot exibirá uma mensagem de boas-vindas e um menu com opções

Escolha uma das opções ou digite "menu" a qualquer momento para reexibir o menu

🧠 Base de conhecimento
As perguntas e respostas estão organizadas no arquivo:

respostas.json

📁 Estrutura do projeto
📁 chatbot-telegram-ppgletras
│
├── index.js           # Arquivo principal do bot
├── respostas.json     # Base de dados com perguntas/respostas
├── package.json       # Dependências e scripts do projeto
└── README.md          # Documentação do projeto

👩‍💻 Autora
Neandra AW.
Desenvolvido como parte do Projeto Integrador do curso de Tecnologia em Sistemas para Internet - UFMS.

Copyright (c) 2025 Neandra W.