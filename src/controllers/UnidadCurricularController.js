const UnidadCurricular = require('../models/UnidadCurricular');

const getAll = async(req, res) =>{
    const result = await UnidadCurricular.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await UnidadCurricular.create(req.body)
    return res.status(201).json(result)
}

const getOne = async(req, res) =>{
    const {id} = req.params
    const result = await UnidadCurricular.findByPk(id)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {id} = req.params
    await UnidadCurricular.destroy({where : {id}})
    return res.sendStatus(204)
}

const update = async(req, res) =>{
    const {id} = req.params
    const result = await UnidadCurricular.update(req.body, {where: {id}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}