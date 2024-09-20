const Like = require('../modelo/denuncia');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const LikeController = {
    createLike: async (req, res) => {
        try {
            let denuncia = req.body
            denuncia.localizacao = "casa0"
            denuncia.data_criacao = Date.now();
            const novoLike = await Like.create(denuncia);
            res.json(novoLike);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllLike: async (req, res) => {
        try {
            const denuncia = await Like.findAll();
            res.json(denuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getLikeById: async (req, res) => {
        try {
            const denuncia = await Like.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Like não encontrado');
            }
            res.json(denuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateLike: async (req, res) => {
        try {
            const denuncia = await Like.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Like não encontrado');
            }
            await Like.update(req.body);
            res.send('Like atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteLike: async (req, res) => {
        try {
            const denuncia = await Like.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Like não encontrado');
            }
            await Like.destroy();
            res.send('Like deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = LikeController;