const express = require('express');
const app = express();
const name = require('./data.json')

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(express.static('public'))
app.use(urlLogger, timeLogger);

app.get('/', (request, response) => {
  response.send('hello world');
});

app.get('/json', (request, response) => {
  response.status(200).json(name);
});

app.use(function (request, response) {
  response.status(404).json('Page not found')
})

