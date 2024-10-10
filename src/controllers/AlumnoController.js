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
    try{
        const {dni} = req.params
        if(!dni){
            return res.status(400).send('Debes proporcionar un dni válido')
        }
        const result = await Alumno.findByPk(dni);
        if(!result) {return res.sendStatus(404).send('No se encontró ningun alumno con ese dni')
        } else {
            res.status(200).json(result);
        }
    }catch(error){
        console.log(error)
    }
}

const remove = async(req, res) =>{
    try{
        const {dni} = req.params
        if(!dni){
            return res.status(400).send('Debes proporcionar un dni válido')
        }
        const result = await Alumno.destroy({where : {dni}})
        if(!result) {return res.sendStatus(404).send('No se encontró ningun alumno con ese dni')
        } else {
            res.status(204);
        }
    }catch(error){
        console.log(error)
    }
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