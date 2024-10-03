const Carrera = require('../models/Carrera');

const getAll = async(req, res) =>{
    const result = await Carrera.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await Carrera.create(req.body)
    return res.status(201).json(result)
}

const getOne = async(req, res) =>{
    const {id} = req.params
    const result = await Carrera.findByPk(id)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {id} = req.params
    await Carrera.destroy({where : {id}})
    return res.sendStatus(204)
}

const update = async(req, res) =>{
    const {id} = req.params
    const result = await Carrera.update(req.body, {where: {id}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}