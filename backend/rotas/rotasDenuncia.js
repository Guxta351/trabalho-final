const express = require('express');
const router = express.Router();
const DenunciaController = require('../controlador/controladorDenuncia');

// Rota para criar um novo produto
router.post('/Denuncia', DenunciaController.createDenuncia);

// Rota para entrar no sistema
//router.post('/entrar', DenunciaController.entrar);

// Rota para obter todos os denuncias
router.get('/Denuncia', DenunciaController.getAllDenuncias);

// Rota para obter um produto pelo ID
router.get('/Denuncia/:id', DenunciaController.getDenunciaById);

// Rota para atualizar um produto
router.put('/Denuncia/:id', DenunciaController.updateDenuncia);

// Rota para deletar um produto
router.delete('/Denuncia/:id', DenunciaController.deleteDenuncia);

// Rota para registrar entrada de estoque
//router.post('/denuncias/:id/entrada', DenunciaController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/denuncias/:id/saida', DenunciaController.registrarSaida);

module.exports = router;