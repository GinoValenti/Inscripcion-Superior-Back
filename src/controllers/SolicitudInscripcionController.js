const SolicitudInscripcion = require('../models/SolicitudInscripcion');

const getAll = async(req, res) =>{
    const result = await SolicitudInscripcion.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await SolicitudInscripcion.create(req.body)
    return res.status(201).json(result)
}

const getOne = async(req, res) =>{
    const {dni} = req.params
    const result = await SolicitudInscripcion.findByPk(dni)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {dni} = req.params
    await SolicitudInscripcion.destroy({where : {dni}})
    return res.sendStatus(204)
}

const update = async(req, res) =>{
    const {dni} = req.params
    const result = await SolicitudInscripcion.update(req.body, {where: {dni}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}