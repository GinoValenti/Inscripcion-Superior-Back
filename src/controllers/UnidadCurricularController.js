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
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).send('Debes proporcionar un id válido')
        }
        const result = await UnidadCurricular.findByPk(id);
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna unidad curricular con ese id')
        } else {
            res.status(200).json(result);
        }
    }catch(error){
        console.log(error)
    }
}

const remove = async(req, res) =>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).send('Debes proporcionar un id válido')
        }
        const result = await UnidadCurricular.destroy({where : {id}})
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna unidad curricular con ese id')
        } else {
            res.status(204);
        }
    }catch(error){
        console.log(error)
    }
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