const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = 0;
app.get('/', (req, res) => {
    if(contador < jogadores.length){
        res.json(`É a vez de ${jogadores[contador]} jogar!`);
    }

    else{
        contador = 0;
        res.json(`É a vez de ${jogadores[contador]} jogar!`);
    }
    contador += 1
})

app.listen(3000);