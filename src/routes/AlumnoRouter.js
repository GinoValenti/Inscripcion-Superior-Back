const {getAll, create, getOne, remove, update, getRol,login} = require('../controllers/AlumnoController')
const express = require('express')
const routerAlumno = express.Router()

routerAlumno.route('/')
            .get(getAll)
            .post(create)

routerAlumno.route('/:DNI')
            .get(getOne)
            .delete(remove)
            .put(update)

routerAlumno.route('/rol/:rol')
            .get(getRol)
routerAlumno.route("/login").post(login)
          
module.exports = routerAlumno