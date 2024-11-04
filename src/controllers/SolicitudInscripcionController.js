const SolicitudInscripcion = require('../models/SolicitudInscripcion');

const getAll = async(req, res) =>{
    const result = await SolicitudInscripcion.findAll()
    return res.json(result)
}

const create = async(req, res) =>{
    const result = await SolicitudInscripcion.create(req.body)
    return res.status(201).json(result)
}
const getOne = async (req, res) => {
    try {
        const { DNI } = req.params; // Cambié 'dni' a minúsculas para seguir la convención.

        // Verificar si se proporciona un DNI
        if (!DNI) {
            return res.status(400).send('Debes proporcionar un DNI válido');
        }

        // Buscar el alumno por DNI
        const result = await SolicitudInscripcion.findByPk(DNI);

        // Verificar si se encontró el alumno
        if (!result) {
            return res.status(404).send('No se encontró ningún alumno con ese DNI');
        } else {
            // Enviar la información del alumno como respuesta
            return res.status(200).json(result);
        }
    } catch (error) {
        console.error('Error al obtener el alumno:', error);
        return res.status(500).send('Hubo un error al procesar la solicitud');
    }
}
const remove = async (req, res) => {
    try {
        const { DNI } = req.params;

        // Verificar si se proporciona un DNI
        if (!DNI) {
            return res.status(400).send('Debes proporcionar un DNI válido');
        }

        // Intentar eliminar la solicitud de inscripción
        const result = await SolicitudInscripcion.destroy({ where: { DNI } });

        // Verificar si se eliminó alguna solicitud
        if (result === 0) {
            return res.status(404).send('No se encontró ninguna solicitud de inscripción con ese DNI');
        }

        // Enviar respuesta de éxito con mensaje
        return res.status(200).send('Solicitud eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar la solicitud:', error);
        return res.status(500).send('Hubo un error al procesar la solicitud');
    }
}


const update = async(req, res) =>{
    const {DNI} = req.params
    const result = await SolicitudInscripcion.update(req.body, {where: {DNI}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}