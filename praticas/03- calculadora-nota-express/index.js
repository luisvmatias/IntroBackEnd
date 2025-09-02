// importar o express
const express = require('express');

//criar instancia no meu backend com o express
const app = express();

//intermediarios - middlewares
//intermediario do LOG
//toda requisição vai passar por ele e imprimir no terminal
//info requisições
app.use((req, res, next) => {
    console.log("Time:", new Date().toLocaleString())
    console.log("Metodo:", req.method)
    console.log("rota:", req.url)
    next()
});


//mapeamento de requisições - body parser
//req-> requisição
//res -> resposta
//next -> chama a proxima função
app.get('/hello', (req, res, next) => {
    res.send('Hello World... from Express!');
})

//endpoint da API
app.get('/pessoas', (req, res, next) => {
    const pessoas = [
        { id: 1, nome: 'Ana' },
        { id: 2, nome: 'Bia' },
    ]
    res.json(pessoas)
})

// executar aplicação escolhendo a porta que será usada
app.listen(3000, () => {
    console.log('Calculadora de notas rodando em http://localhost:3000 (porta 3000)');
});