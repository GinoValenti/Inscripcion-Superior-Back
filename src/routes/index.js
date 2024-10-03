const express = require('express')
const routerAlumno = require('./AlumnoRouter')
const routerSolicitudInscripcion = require('./SolicitudInscripcionRouter')
const routerCarrera = require('./CarreraRouter')
const routerAdministrador = require('./AdministradorRouter')
const routerUnidadCurricular = require('./UnidadCurricularRouter')
//const routerClases = require('./ClasesRouter')

const router = express.Router()

router.use('/alumno', routerAlumno)
router.use('/solicitudInscripcion', routerSolicitudInscripcion)
router.use('/carrera', routerCarrera)
router.use('/administrador', routerAdministrador)
router.use('/unidadCurricular', routerUnidadCurricular)
//router.use('/clases', routerClases)

module.exports = router