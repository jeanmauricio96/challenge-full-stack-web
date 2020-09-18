const express = require('express');

const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routeStudents = require('./routes/students');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// eslint-disable-next-line consistent-return
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header(
    'Access-Control-Allow-Origin',
    'Origin, X-requrested, Content-type, Accept, Authorization'
  );
  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Origin', 'PUT,POST,PATCH,DELETE,GET');
    return response.status(200).send({});
  }

  next();
});

app.use('/students', routeStudents);

app.use((request, response, next) => {
  const erro = new Error('Não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((erro, request, response, next) => {
  response.status(erro.status || 500);
  return response.send({
    mensagem: 'Não encontrado!',
  });
});

module.exports = app;
