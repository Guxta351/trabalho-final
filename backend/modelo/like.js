const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Like extends Model {}

Like.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    autor:{
        type: DataTypes.INTEGER
    },
    data_criacao: {
        type: DataTypes.DATE
    },
    denuncia: {
        type: DataTypes.INTEGER
    },
   
    
}, {
    sequelize,
    modelName: 'likes',
    timestamps: false
});

module.exports = Like;