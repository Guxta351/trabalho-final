const Usuario = require('../modelo/usuario');
//const EntradaEstoque = require('../models/EntradaEstoque');
//const SaidaEstoque = require('../models/SaidaEstoque');

const UsuarioController = {
    createUsuario: async (req, res) => {
        try {
            const novoUsuario = await Usuario.create(req.body);
            res.json(novoUsuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    
    entrar: async(req, res) => { 
        const email = req.body.email
        const usuario = email.substring(0, email.indexOf("@"));
        const dominio = email.substring(email.indexOf("@")+ 1, email.length);

        if ((usuario.length >=1) &&
            (dominio.length >=3) &&
            (usuario.search("@")==-1) &&
            (dominio.search("@")==-1) &&
            (usuario.search(" ")==-1) &&
            (dominio.search(" ")==-1) &&
            (dominio.search(".")!=-1) &&
            (dominio.indexOf(".") >=1)&&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
                // Busca pessoa no banco pelo email
                const usuario = await Usuario.findOne({ where: { email: email } });
                // Pega a senha da pessoa no banco
                const senhaBanco = usuario.senha
                // Compara com a senha que recebeu
                const senha = req.body.senha

                if(senha == senhaBanco){
                    res.json(usuario)
                } else {
                    res.status(400).send('Login ou senha inválida');
                }
        } else {
            res.status(400).send('E-mail inválido');
        }
    },

    getAllUsuarios: async (req, res) => {
        try {
            const usuario = await Usuario.findAll();
            res.json(usuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getUsuarioById: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
                return res.status(404).send('Usuario não encontrado');
            }
            res.json(usuario);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    updateUsuario: async (req, res) => {
        try {
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
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
            const usuario = await Usuario.findByPk(req.params.id);
            if (!usuario) {
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

module.exports = UsuarioController;