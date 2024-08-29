const Usuario = require('../models/Usuario');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const ProdutoController = {
    createUsuario: async (req, res) => {
        try {
            const novoProduto = await Usuario.create(req.body);
            res.json(novoProduto);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllUsuario: async (req, res) => {
        try {
            const Usuario = await Usuario.findAll();
            res.json(Usuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getUsuarioById: async (req, res) => {
        try {
            const Usuario = await Usuario.findByPk(req.params.id);
            if (!Usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            res.json(Usuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const Usuario = await Usuario.findByPk(req.params.id);
            if (!Usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            await Usuario.update(req.body);
            res.send('Usuario atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteUsuario: async (req, res) => {
        try {
            const Usuario = await Usuario.findByPk(req.params.id);
            if (!Usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            await Usuario.destroy();
            res.send('Usuario deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = usuarioController;