const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Denuncia extends Model {}

Usuario.init({
    id_denuncia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    data_criacao: {
        type: DataTypes.DATE
    },
    descricao: {
        type: DataTypes.TEXT
    },
    localizacao: {
        type: DataTypes.TEXT
    },
    
}, {
    sequelize,
    modelName: 'Denuncia',
    timestamps: false
});

module.exports = Denuncia;