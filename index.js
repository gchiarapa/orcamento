require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = process.env.PORT || 3000;

// Configurar a API Key do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Middleware para tratar JSON
app.use(bodyParser.json());

// Rota para envio de e-mails
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  const msg = {
    to : to, // Destinatário
    from: 'gchiarapa@gmail.com', // E-mail verificado no SendGrid
    subject: subject, // Assunto do e-mail
    text: text, // Conteúdo do e-mail
  };

  try {
    await sgMail.send(msg);
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).send('Erro ao enviar e-mail.');
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});