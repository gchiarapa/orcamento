require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// Configurar a API Key do SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Método não permitido' }),
      headers: {
        'Access-Control-Allow-Origin': '*', // Permite qualquer origem
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  }

  try {
    const { to, subject, text } = JSON.parse(event.body);

    const msg = {
      to: to, // Destinatário
      from: 'gchiarapa@gmail.com', // E-mail verificado no SendGrid
      subject: subject,
      text: text,
    };

    console.log("Mensagem: " , msg);
    console.log("Iniciando envio de email");
    await sgMail.send(msg);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'E-mail enviado com sucesso!' }),
      headers: {
        'Access-Control-Allow-Origin': '*', // Permite qualquer origem
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Erro ao enviar e-mail', error: error.message }),
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};