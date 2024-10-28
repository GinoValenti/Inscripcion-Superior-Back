const {getAll, create, getOne, remove, update, getRol} = require('../controllers/AlumnoController')
const express = require('express')
const routerAlumno = express.Router()

routerAlumno.route('/')
            .get(getAll)
            .post(create)

routerAlumno.route('/:dni')
            .get(getOne)
            .delete(remove)
            .put(update)

routerAlumno.route('/rol/:rol')
            .get(getRol)


module.exports = routerAlumno