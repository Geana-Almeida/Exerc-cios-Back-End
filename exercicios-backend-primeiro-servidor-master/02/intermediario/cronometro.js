let minutos = 0;
let segundos = 0;

let tempo = 1000;//Quantos milésimos valem 1 segundo
let cron;

function cronometro() {
    segundos++
    if(segundos == 59){
        segundos = 0
        minutos++
    }
}

const recursoPrincipal = (req, res) => {
    minutoFormatado = minutos.toString().padStart(2, '0');
    segundoFormatado = segundos.toString().padStart(2, '0');
    return res.json(`Tempo atual do cronômetro: ${minutoFormatado} minutos e ${segundoFormatado} segundos`)
}

const iniciar = (req, res) => {
    try{
        clearInterval(cron);
        cron = setInterval(() => {
            cronometro();
        }, tempo)
        
        return res.json("Cronômetro iniciado!");
    }catch(error){
        console.log(error);
        return res.json("Error")
    }
}

const pausar = (req, res) => {
    clearInterval(cron);
    return res.status(201).json('Cronômetro pausado!');
}

const continuar = (req, res) => {
    clearInterval(cron);
        cron = setInterval(() => {
            cronometro();
        }, tempo)

    return res.status(201).json('Cronômetro continuando!');
}

const zerar = (req, res) => {
    minutos = 0;
    segundos = 0;

    return res.status(201).json('Cronômetro zerado!');
}

module.exports = {
    recursoPrincipal,
    iniciar,
    pausar,
    continuar,
    zerar
}