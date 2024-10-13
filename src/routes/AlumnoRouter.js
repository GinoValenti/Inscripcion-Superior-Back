const {getAll, create, getOne, remove, update} = require('../controllers/AlumnoController')
const express = require('express')
const routerAlumno = express.Router()

routerAlumno.route('/')
            .get(getAll)
            .post(create)

routerAlumno.route('/:dni')
            .get(getOne)
            .delete(remove)
            .put(update)


module.exports = routerAlumno