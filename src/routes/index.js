const express = require('express')
const routerAlumno = require('./AlumnoRouter')
const router = express.Router()

router.use('/alumno', routerAlumno)


module.exports = router