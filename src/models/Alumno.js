const sequelize = require('../utils/connect');
const { DataTypes, Model } = require('sequelize');

const Alumno = sequelize.define('Alumno', {
    dni : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    nombre : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    apellido : {
        type: DataTypes.CHAR,
        allowNull: false
    },
    fecha_nacimiento : {
        type: DataTypes.DATE,
        allowNull: false
    },
    direccion : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    telefono : {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    contraseña : {
        type: DataTypes.TEXT,
        allowNull: true
    },
    rol : {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'user'
    }

})

module.exports = Alumno;