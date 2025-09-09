const express = require('express')
const router = express.Router()

// rota calculo nota a1
router.get("/calculadora/notaA1", (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "Preencha os campos corretamente!" })
    }
    if (exercicio < 0 || exercicio > 1 ||
        trabalho < 0 || trabalho > 3 ||
        prova < 0 || prova > 6) {
        return res.status(400).json({ erro: "Notas Invalidas!" })
    }

    const notaA1 = exercicio + trabalho + prova
    res.json({ notaA1 })
    console.log(notaA1)
})

// rota calculo nota a2
router.get("/calculadora/notaA2", (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    if (isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)) {
        return res.status(400).json({ erro: "Preencha os campos corretamente!" })
    }
    if (exercicio < 0 || exercicio > 1 ||
        trabalho < 0 || trabalho > 3 ||
        prova < 0 || prova > 6) {
        return res.status(400).json({ erro: "Notas Invalidas!" })
    }

    const notaA2 = exercicio + trabalho + prova
    res.json({ notaA2 })
    console.log(notaA2)
})

// rota calculo nota final
router.get("/calculadora/media", (req, res, next) => {
    const notaA1 = parseFloat(req.query.notaA1)
    const notaA2 = parseFloat(req.query.notaA2)

    if (isNaN(notaA1) || isNaN(notaA2)) {
        return res.status(400).json({ erro: "Notas Incorretas!" })
    }
    if (notaA1 < 0 || notaA1 > 10 ||
        notaA2 < 0 || notaA2 > 10) {
        return res.status(400).json({ erro: "Notas Invalidas!" })
    }
    
    const media = (notaA1 * 0.4) + (notaA2 * 0.6)
    res.json({ media })
    console.log(media)
})



module.exports = router