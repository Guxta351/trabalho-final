const express = require('express');
const router = express.Router();
const LikeController = require('../controlador/controladorLike');

// Rota para criar um novo produto
router.post('/like', LikeController.createLike);

// Rota para entrar no sistema
//router.post('/entrar', LikeController.entrar);

// Rota para obter todos os denuncias
router.get('/like', LikeController.getAllLikes);

// Rota para obter um produto pelo ID
router.get('/like/:id', LikeController.getLikeById);

// Rota para atualizar um produto
router.put('/like/:id', LikeController.updateLike);

// Rota para deletar um produto
router.delete('/like/:id', LikeController.deleteLike);

// Rota para registrar entrada de estoque
//router.post('/denuncias/:id/entrada', LikeController.registrarEntrada);

// Rota para registrar saída de estoque
//router.post('/denuncias/:id/saida', LikeController.registrarSaida);

module.exports = router;