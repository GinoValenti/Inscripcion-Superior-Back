const sequelize = require('../utils/connect');
const { DataTypes } = require('sequelize');

const SolicitudInscripcion = sequelize.define('SolicitudInscripcion', {
    dni : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nombre : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    apellido : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    estado : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    fecha_nacimiento : {
        type: DataTypes.DATE,
        allowNull: false
    },
    titulo_secundario : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    id_carrera : {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    direccion : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    telefono : {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email : {
        type: DataTypes.CHAR,
        allowNull: false
    }

})

module.exports = SolicitudInscripcion;