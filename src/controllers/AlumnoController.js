const Alumno = require('../models/Alumno');

const getAll = async(req, res) =>{
    const result = await Alumno.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await Alumno.create(req.body)
    return res.status(201).json(result)
}

const getOne = async(req, res) =>{
    const {dni} = req.params
    const result = await Alumno.findByPk(dni)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {dni} = req.params
    await Alumno.destroy({where : {dni}})
    return res.sendStatus(204)
}

const update = async(req, res) =>{
    const {dni} = req.params
    const result = await Alumno.update(req.body, {where: {dni}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}