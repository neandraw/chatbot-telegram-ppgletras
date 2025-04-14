require('dotenv').config();
const { Telegraf, Markup } = require('telegraf');
const fs = require('fs');

// Substitua pela sua chave real
const bot = new Telegraf('process.env.BOT_TOKEN');

const respostas = JSON.parse(fs.readFileSync('respostas.json', 'utf8'));

// Comando /start com saudação e menu
bot.start((ctx) => {
  ctx.reply('👋 Olá! Seja bem-vindo ao atendimento da Pós-graduação PPGLETRAS/UEMS!\n\n');

  const entrada = respostas["menu"];
  if (entrada && entrada.botoes) {
    const botoes = entrada.botoes.map(item => [Markup.button.text(item.texto)]);
    ctx.reply(entrada.resposta, Markup.keyboard(botoes).resize());
  }
});

bot.on('text', (ctx) => {
  const pergunta = ctx.message.text.toLowerCase();

  // Se a mensagem for "menu", exibe o teclado com opções
  if (pergunta === "menu") {
    const entrada = respostas["menu"];
    if (entrada && entrada.botoes) {
      const botoes = entrada.botoes.map(item => [Markup.button.text(item.texto)]);
      ctx.reply(entrada.resposta, Markup.keyboard(botoes).resize());
    }
    return;
  }

  const entrada = respostas[pergunta];

  if (!entrada) {
    ctx.reply('❌ Desculpe, não entendi. Tente novamente ou digite "menu".');
    return;
  }

  if (typeof entrada === 'string') {
    ctx.reply(entrada);
  } else if (entrada.botao) {
    ctx.reply(entrada.resposta, Markup.inlineKeyboard([
      Markup.button.url(entrada.botao.texto, entrada.botao.url)
    ]));
  } else if (entrada.botoes) {
    const botoes = entrada.botoes.map(item => [Markup.button.text(item.texto)]);
    ctx.reply(entrada.resposta, Markup.keyboard(botoes).resize());
  } else if (entrada.resposta) {
    ctx.reply(entrada.resposta);
  } else {
    ctx.reply('⚠️ Resposta mal formatada no JSON.');
  }
});

bot.launch();
console.log('🤖 Bot com menu rodando...');
