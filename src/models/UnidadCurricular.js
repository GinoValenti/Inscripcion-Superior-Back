const sequelize = require('../utils/connect');
const { DataTypes } = require('sequelize');

const UnidadCurricular = sequelize.define('UnidadCurricular', {
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nombre : {
        type: DataTypes.CHAR,
        unique: true,
        allowNull: false
    },
    tipo : {
        type: DataTypes.CHAR,
        allowNull: false
    }

})

module.exports = UnidadCurricular;