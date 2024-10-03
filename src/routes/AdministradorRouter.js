const {getAll, create, getOne, remove, update} = require('../controllers/AdministradorController')
const express = require('express')
const routerAdministrador = express.Router()

routerAdministrador.route('/')
            .get(getAll)
            .post(create)

routerAdministrador.route('/:dni')
            .get(getOne)
            .delete(remove)
            .put(update)


module.exports = routerAdministrador