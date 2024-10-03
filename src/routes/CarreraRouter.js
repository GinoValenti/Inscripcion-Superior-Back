const {getAll, create, getOne, remove, update} = require('../controllers/CarreraController')
const express = require('express')
const routerCarrera = express.Router()

routerCarrera.route('/')
            .get(getAll)
            .post(create)

routerCarrera.route('/:id')
            .get(getOne)
            .delete(remove)
            .put(update)


module.exports = routerCarrera