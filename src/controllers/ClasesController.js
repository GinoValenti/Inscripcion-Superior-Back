/*
const Clases = require('../models/Clases');
const Carrera = require('../models/Carrera');
const Alumno = require('../models/Alumno');
const UnidadCurricular = require('../models/UnidadCurricular');

const getAll = ("" ,async(req, res) =>{
    const result = await Clases.findAll()
    return res.json(result)
})


const getOne = async(req, res) =>{
    const {id} = req.params
    const result = await Clases.findByPk(id)
    if(!result) return res.sendStatus(404)
    return req.json(result)
}

const remove = async(req, res) =>{
    const {id} = req.params
    await Clases.destroy({where : {id}})
    return res.sendStatus(204)
}

module.exports = {
    getAll,
    getOne,
    remove,
}
    */