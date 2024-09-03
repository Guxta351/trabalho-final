const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
    id_Usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nome_Usuario: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.TEXT
    },
    Senha: {
        type: DataTypes.TEXT

    },
    Endereco: {
        type : DataTypes.TEXT
    }
    
}, {
    sequelize,
    modelName: 'Usuario',
    timestamps: false
});

module.exports = Usuario;