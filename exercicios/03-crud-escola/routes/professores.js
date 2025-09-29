const express = require('express');
const router = express.Router();

let professores = [
  { id: 1,
    nome: "Carlos Pereira",
    email: "carlos@email.com",
    cpf: "11122233344",
    curso: "Engenharia",
    disciplina: "Cálculo" 
  },
  { id: 2,
    nome: "Ana Costa",
    email: "ana@email.com",
    cpf: "55566677788",
    curso: "Computação", 
    disciplina: "Programação"
  }
];

// Todos os Professores
router.get('/professores', (req, res, next) => {
    res.json(professores);
});

// Professor por ID
router.get('/professores/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const professor = professores.find(p => p.id == idRecebido)
    if (!professor) {
        return res.status(404).json({ error: "Professor não encontrado" });
    }
    res.json(professor);
}); 

// Cadastrar um Novo Professor
router.post('/professores', (req, res, next) => {
    const {nome, email, cpf, curso, disciplina} = req.body
    if(!nome || !email || !cpf || !curso || !disciplina) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" }); 
    }
    const professor = professores.find(professor => professor.cpf == cpf)
    if(professor) {
        return res.status(409).json({ error: "CPF já cadastrada" });
    }
    const novoProfessor = {
        id: Date.now(),
        nome,
        cpf,
        email,
        curso,
        disciplina
    }
   professores.push(novoProfessor)
    res.status(201).json({message: "Professor criado com sucesso", novoProfessor});
});

// Editar/Atualizar dados do Professor  
router.put('/professores/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const {nome, email, cpf, curso, disciplina} = req.body
    if(!nome || !email || !cpf || !curso || !disciplina) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" }); 
    }  
    const professor = professores.find(professor => professor.id == idRecebido)
    if(!professor) {
        return res.status(404).json({ error: "Professor não encontrado" });
    }
    professor.nome = nome
    professor.email = email
    professor.cpf = cpf
    professor.curso = curso
    professor.disciplina = disciplina
    res.json({message: "Professor atualizado com sucesso", professor});
});

// Excluir um Professor
router.delete('/professores/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const professor = professores.find(professor => professor.id == idRecebido)
    if (!professor) {
        return res.status(404).json({ error: "Professor não Encontrado" });
    }
    professores = professores.filter(professor => professor.id != idRecebido)
    res.json({message: "Professor deletado com sucesso"});
});

module.exports = router;