const Alumno = require('../models/Alumno');

const getAll = async(req, res) =>{
    const result = await Alumno.findAll()
    return res.json(result)
}
const create = async (req, res) => {
    // Extraer los datos del cuerpo de la solicitud
    const {
        dni,
        nombre,
        apellido,
        fecha_nacimiento,
        direccion,
        telefono,
        contraseña,
        rol
    } = req.body;

    // Limpia y valida los campos
    const cleanedData = {
        dni: dni ? String(dni).trim() : null, // Convierte a string y limpia
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        fecha_nacimiento: fecha_nacimiento ? new Date(fecha_nacimiento) : null, // Asegúrate de que el formato sea correcto
        direccion: direccion.trim(),
        telefono: telefono ? String(telefono).trim() : null, // Convierte a string para limpiar
        contraseña: contraseña ? contraseña.trim() : null,
        rol: rol ? rol.trim() : 'user' // Si no se proporciona rol, se establece por defecto a 'user'
    };

    // Validación básica
    if (!cleanedData.dni || !cleanedData.nombre || !cleanedData.apellido || !cleanedData.fecha_nacimiento || !cleanedData.direccion || !cleanedData.telefono) {
        return res.status(400).send('Todos los campos son requeridos.');
    }

    try {
        const result = await Alumno.create(cleanedData);
        return res.status(201).json(result);
    } catch (error) {
        console.error('Error al crear el alumno:', error);
        return res.status(500).send('Hubo un error al crear el alumno');
    }
};
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

const getRol = async (req, res) => {
    try {
        const { rol } = req.params;
        if (!rol || (rol !== 'user' && rol !== 'admin')) {
            return res.status(400).send('Debes proporcionar un rol válido ("user" o "admin")');
        }
        const result = await Alumno.findAll({
            where: { rol }
        });
        if (!result || result.length === 0) {
            return res.status(404).send('No se encontró ningún usuario con ese rol');
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el servidor');
    }
};


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
const login = async (req, res) => {
    const { nombre, contraseña } = req.body;

    // Aquí deberías buscar el alumno en la base de datos
    const alumno = await Alumno.findOne({ where: { nombre } });

    // Validar si el alumno existe
    if (!alumno) {
        return res.status(401).send('Nombre o contraseña incorrectos');
    }

    // Validar la contraseña
    if (alumno.contraseña !== contraseña) {
        return res.status(401).send('Nombre o contraseña incorrectos');
    }

    // Si la autenticación es exitosa, puedes devolver un mensaje de éxito
    return res.status(200).json({ message: 'Login exitoso', alumno });
};
const update = async(req, res) =>{
    const {dni} = req.params
    const result = await Alumno.update(req.body, {where: {dni}, returning: true})
    return res.json(result)
}

module.exports = {
    getAll,
    create,
    getOne,
    getRol,
    remove,
    update,
    login
}