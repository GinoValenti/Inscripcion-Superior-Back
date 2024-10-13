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
    try{
        const {usuario} = req.params
        if(!usuario){
            return res.status(400).send('Debes proporcionar un usuario válido')
        }
        const result = await Administrador.findByPk(usuario);
        if(!result) {return res.sendStatus(404).send('No se encontró ningun administrador con ese usuario')
        } else {
            res.status(200).json(result);
        }
    }catch(error){
        console.log(error)
    }
}

const remove = async(req, res) =>{
    try{
        const {usuario} = req.params
        if(!usuario){
            return res.status(400).send('Debes proporcionar un usuario válido')
        }
        const result = await Administrador.destroy({where : {usuario}})
        if(!result) {return res.sendStatus(404).send('No se encontró ningun administrador con ese usuario')
        } else {
            res.status(204);
        }
    }catch(error){
        console.log(error)
    }
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