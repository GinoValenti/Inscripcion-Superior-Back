
const sequelize = require('../utils/connect');
const { DataTypes, Model } = require('sequelize');
const Alumno = require('../models/Alumno');
const Carrera = require('../models/Carrera');
const UnidadCurricular = require('../models/UnidadCurricular');

const Clases = sequelize.define('Clases', {
    id : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false
    }
})

Alumno.belongsToMany(UnidadCurricular, {
    through: Clases
})
Alumno.belongsTo(Carrera, {
    through: Clases
})
UnidadCurricular.belongsToMany(Alumno, {
    through: Clases
})
UnidadCurricular.belongsTo(Carrera, {
    through: Clases
})
Carrera.belongsToMany(UnidadCurricular, {
    through: Clases
})
Carrera.belongsToMany(Alumno, {
    through: Clases
})

// Alumno.sync()
// Carrera.sync()
// UnidadCurricular.sync()
// Clases.sync()

module.exports = Clases;
