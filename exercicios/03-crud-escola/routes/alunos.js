const express = require('express');
const router = express.Router();

let alunos = [
    { 
      id: 1, 
      nome: "Maria Silva",
      email: "maria@email.com",
      cpf: "12345678900",
      telefone: "11999999999",
      dataNascimento: "01/01/2000" 
    },
    {
      id: 2,
      nome: "João Souza",
      email: "joao@email.com",
      cpf: "98765432100",
      telefone: "11988888888",
      dataNascimento: "10/05/1998"
    },
];

// Todos os Alunos
router.get('/alunos', (req, res, next) => {
    res.json(alunos)
});

// Aluno por ID
router.get('/alunos/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const aluno = alunos.find(a => a.id == idRecebido);
    if (!aluno) {
        return res.status(404).json({ error: "Aluno não encontrado" });
    }
    res.json(aluno);
});

// Cadastrar um Novo Aluno
router.post('/alunos', (req, res, next) => {
    const {nome, email, cpf, telefone, dataNascimento} = req.body
    if(!nome || !email || !cpf || !telefone || !dataNascimento) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" }); 
    }
    const aluno = alunos.find(aluno => aluno.cpf == cpf)
    if(aluno) {
        return res.status(409).json({ error: "CPF já cadastrado" });
    }
    const novoAluno = {
        id: Date.now(),
        nome,
        email,
        cpf,
        telefone,
        dataNascimento
    }
   alunos.push(novoAluno)
    res.status(201).json({message: "Aluno criado com sucesso", novoAluno});
});

// Editar/Atualizar dados do Aluno
router.put('/alunos/:id', (req, res, next) => {
    const idRecebido = req.params.id;
    const aluno = alunos.find(aluno => aluno.id == idRecebido);
    if (!aluno) return res.status(404).json({ error: "Aluno não encontrado" });

    const { nome, email, cpf, telefone, dataNascimento } = req.body;
    if (!nome || !email || !cpf || !telefone || !dataNascimento) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    aluno.nome = nome || aluno.nome;
    aluno.email = email || aluno.email;
    aluno.cpf = cpf || aluno.cpf;
    aluno.telefone = telefone || aluno.telefone;
    aluno.dataNascimento = dataNascimento || aluno.dataNascimento;

   res.json({message: "Aluno atualizada com sucesso", aluno});
});

// DELETE
router.delete('/alunos/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const aluno = alunos.find(aluno => aluno.id == idRecebido)
    if (!aluno) {
        return res.status(404).json({ error: "Aluno não Encontrado" });
    }
    alunos = alunos.filter(aluno => aluno.id != idRecebido)
    res.json({ message: "Aluno deletado com sucesso" });
});

module.exports = router;
