const Denuncia = require('../modelo/denuncia');
const ControladorLikes = require('../controlador/controladorLike');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const DenunciaController = {
    createDenuncia: async (req, res) => {
        try {
            let denuncia = req.body
            denuncia.localizacao = "casa0"
            denuncia.data_criacao = Date.now();
            const novoDenuncia = await Denuncia.create(denuncia);
            res.json(novoDenuncia);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getAllDenuncias: async (req, res) => {
        try {
            const denuncias = await Denuncia.findAll();
            // Faça um FOR que passe de denuncia em denuncia, pegue quantos likes ela tem, e coloque nela
            // Dica: pode copiar das linhas 36 e 37
            getAllDenuncias: async (req, res) => {
                try {
                    const denuncias = await Denuncia.findAll();
                    for (let denuncia of denuncias) {
                        const likesCount = await DenunciaLikes.count({
                            where: {
                                denunciaId: denuncia.id, 
                            },
                        });
                        denuncia.dataValues.likes = likesCount; 
                    }
                    res.json(denuncias);
                } catch (error) {
                    res.status(500).send(error.message);
                }
            },
            

            res.json(denuncias);
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
            const likes = await ControladorLikes.getQuantosLikesByDenuncia(denuncia.id)
            denuncia.likes = likes
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