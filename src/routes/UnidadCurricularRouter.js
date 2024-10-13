const {getAll, create, getOne, remove, update} = require('../controllers/UnidadCurricularController')
const express = require('express')
const routerUnidadCurricular = express.Router()

routerUnidadCurricular.route('/')
            .get(getAll)
            .post(create)

routerUnidadCurricular.route('/:dni')
            .get(getOne)
            .delete(remove)
            .put(update)


module.exports = routerUnidadCurricular