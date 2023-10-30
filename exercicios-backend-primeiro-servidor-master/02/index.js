const express = require('express');
const { recursoPrincipal, iniciar, pausar, continuar, zerar } = require('./intermediario/cronometro');

const app = express();

app.use(express.json());


app.get('/', recursoPrincipal);
app.get('/iniciar', iniciar);
app.get('/pausar', pausar);
app.get('/continuar', continuar);
app.get('/zerar', zerar);


app.listen(8000);