const express = require('express');
const router = express.Router();

let pessoas = [
    { 
    id: 1,
    nome: "João",
    cpf: "123.456.789-00",
    email: "joaao@email.com",
    dataNascimento: "30/01/1997"
},
    { 
    id: 2,
    nome: "Maria",
    cpf: "001.234.567-89",
    email: "mariaa@email.com",
    dataNascimento: "30/03/1997"
},
];

// Criar
router.post('/pessoas', (req, res, next) => {});

// Listar
router.get('/pessoas', (req, res, next) => {
    res.json(pessoas[0]);
});

// Buscar por ID
router.get('/pessoas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const pessoa = pessoas.find(p => p.id == idRecebido)
    if (!pessoa) {
        return res.status(404).json({ error: "Pessoa não encontrada" });
    }
    res.json(pessoa);
});

//Editar
router.put('/pessoas/:id', (req, res, next) => {});

// Deletar
router.delete('/pessoas/:id', (req, res, next) => {});



module.exports = router;