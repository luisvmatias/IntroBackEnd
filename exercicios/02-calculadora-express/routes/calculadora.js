const express = require('express');
const router = express.Router();

function somar(a, b) {
  return a + b;
}
function subtrair(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) return 'Erro: divisão por zero';
  return a / b;
}
function aoQuadrado(a) {
  return a * a;
}
function raizQuadrada(a) {
  if (a < 0) return 'Erro: número negativo';
  return Math.sqrt(a);
}

router.get('/somar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: somar(numA, numB) });
});

router.get('/subtrair', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: subtrair(numA, numB) });
});

router.get('/multiplicar', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: multiplicar(numA, numB) });
});

router.get('/dividir', (req, res) => {
  const numA = Number(req.query.numA);
  const numB = Number(req.query.numB);
  res.json({ resultado: dividir(numA, numB) });
});

router.get('/quadrado', (req, res) => {
  const numA = Number(req.query.numA);
  res.json({ resultado: aoQuadrado(numA) });
});

router.get('/raiz', (req, res) => {
  const numA = Number(req.query.numA);
  res.json({ resultado: raizQuadrada(numA) });
});

module.exports = router;