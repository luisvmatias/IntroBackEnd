const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const calculadoraRouter = require('./routes/calculadora');

app.use((req, res, next) => {
    console.log("Requisição efetuada com sucesso!");
    console.log("time: ", new Date().toLocaleString());
    console.log("metodo: ", req.method);
    console.log("rota: ", req.url);
    next()
})

app.use('/calculadora', calculadoraRouter);

app.listen(3000, () => {
  console.log(`🚀 Servidor rodando em http://localhost:3000`);
});