const sequelize = require('../utils/connect');
const { DataTypes } = require('sequelize');

const Carrera = sequelize.define('carrera', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nombre : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    comision : {
        type: DataTypes.INTEGER,
        allowNull: false
    }

})

module.exports = Carrera;