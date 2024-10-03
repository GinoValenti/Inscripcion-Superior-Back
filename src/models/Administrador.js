const sequelize = require('../utils/connect');
const { DataTypes } = require('sequelize');

const Administrador = sequelize.define('administrador', {
    usuario : {
        type: DataTypes.CHAR,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    contraseña : {
        type: DataTypes.CHAR,
        allowNull: true
    }

})

module.exports = Administrador;