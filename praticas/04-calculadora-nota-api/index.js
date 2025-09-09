const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())


app.use((req, res, next) => {
    console.log("------requisição chegou------")
    console.log("time: ", new Date().toLocaleString());
    console.log("metodo: ", req.method);
    console.log("rota: ", req.url);
    next()
})

app.get("/hello", (req, res, next) => {
    res.send("Hello")
})

const calculadoraNotaRouter = require('./routes/CalculadoraNota');
app.use("/", calculadoraNotaRouter);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});