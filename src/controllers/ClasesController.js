
const Clases = require('../models/Clases');
const Carrera = require('../models/Carrera');
const Alumno = require('../models/Alumno');
const UnidadCurricular = require('../models/UnidadCurricular');

const getAll = (async(req, res) =>{
    const result = await Clases.findAll()
    return res.json(result)
})


const getOne = async(req, res) =>{
    try{
        const {id} = req.params
        if(!id){
            return res.status(400).send('Debes proporcionar un id válido')
        }
        const result = await Clases.findByPk(id);
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna clase con ese id')
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
        const result = await Clases.destroy({where : {id}})
        if(!result) {return res.sendStatus(404).send('No se encontró ninguna clase con ese id')
        } else {
            res.status(204);
        }
    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAll,
    getOne,
    remove,
}
    