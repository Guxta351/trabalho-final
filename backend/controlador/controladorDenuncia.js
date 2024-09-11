const Denuncia = require('../modelo/denuncia');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const DenunciaController = {
    createDenuncia: async (req, res) => {
        try {
            let denuncia= req.body
            denuncia.localizacao= "casa0"
            denuncia.data_criacao = Date.now();
            const novoDenuncia = await Denuncia.create(denuncia);
            res.json(novoDenuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllDenuncias: async (req, res) => {
        try {
            const denuncia = await Denuncia.findAll();
            res.json(denuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getDenunciaById: async (req, res) => {
        try {
            const denuncia = await Denuncia.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Denuncia não encontrado');
            }
            res.json(denuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateDenuncia: async (req, res) => {
        try {
            const denuncia = await Denuncia.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Denuncia não encontrado');
            }
            await Denuncia.update(req.body);
            res.send('Denuncia atualizado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    deleteDenuncia: async (req, res) => {
        try {
            const denuncia = await Denuncia.findByPk(req.params.id);
            if (!denuncia) {
                return res.status(404).send('Denuncia não encontrado');
            }
            await Denuncia.destroy();
            res.send('Denuncia deletado com sucesso');
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    // Implementação das funções de controle de estoque
    // registrarEntrada e registrarSaida
    // ... (a ser implementado)
};

module.exports = DenunciaController;