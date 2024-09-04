const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Usuario extends Model {}

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_usuario: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.TEXT
    },
    senha: {
        type: DataTypes.TEXT

    },
    endereco: {
        type : DataTypes.TEXT
    }
    
}, {
    sequelize,
    modelName: 'Usuarios',
    timestamps: false
});

module.exports = Usuario;