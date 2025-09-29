const express = require('express');
const cors = require('cors');
const app = express();
const alunosRoutes = require('./routes/alunos');
const professoresRoutes = require('./routes/professores');

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log("------### Log Da Requisição ###------")
    console.log("time: ", new Date().toLocaleString());
    console.log("method: ", req.method);
    console.log("route: ", req.url);
    next()
})

app.use(alunosRoutes);
app.use(professoresRoutes);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});