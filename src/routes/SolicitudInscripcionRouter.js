const {getAll, create, getOne, remove, update} = require('../controllers/SolicitudInscripcionController')
const express = require('express')
const routerSolicitudInscripcion = express.Router()

routerSolicitudInscripcion.route('/')
            .get(getAll)
            .post(create)

routerSolicitudInscripcion.route('/:DNI')
            .get(getOne)
            .delete(remove)
            .put(update)


module.exports = routerSolicitudInscripcion