const Administrador = require('../models/Administrador');

const getAll = async(req, res) =>{
    const result = await Administrador.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await Administrador.create(req.body)
    return res.status(201).json(result)
}

const getOne = async(req, res) =>{
    const {usuario} = req.params
    const result = await Administrador.findByPk(usuario)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {usuario} = req.params
    await Administrador.destroy({where : {usuario}})
    return res.sendStatus(204)
}

const update = async(req, res) =>{
    const {usuario} = req.params
    const result = await Administrador.update(req.body, {where: {usuario}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}