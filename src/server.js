// app.js
const express = require('express');
const sequelize = require('./utils/connect');
const cors = require('cors');
const router = require('./routes'); // Importar las rutas

const app = express();
const PORT = 4000;

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Para manejar el cuerpo de las solicitudes JSON

// Usar las rutas importadas
app.use('/api/v1', router);

const main = async () => {
    try {
        await sequelize.sync(); // Sincronizar con la base de datos
        console.log('Conectado a la base de datos');
        app.listen(PORT, () => {
            console.log('Conectado a Servidor con puerto: ' + PORT);
        });
    } catch (error) {
        console.error('Error al iniciar el servidor:', error);
    }
};

main();
