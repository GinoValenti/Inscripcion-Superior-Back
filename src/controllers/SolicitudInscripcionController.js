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
    try{
        const {dni} = req.params
        if(!dni){
            return res.status(400).send('Debes proporcionar un dni válido')
        }
        const result = await SolicitudInscripcion.findByPk(dni);
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna solicitud de inscripcion con ese dni')
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
        const result = await SolicitudInscripcion.destroy({where : {dni}})
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna solicitud de inscripcion con ese dni')
        } else {
            res.status(204);
        }
    }catch(error){
        console.log(error)
    }
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