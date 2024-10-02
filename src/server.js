const app = require('./app');
const sequelize = require('./utils/connect');

const PORT = 3000;

const main = async () => {
    try {
        await sequelize.sync()
        console.log('Conectado a la base de datos')
        app.listen(PORT, () => {
            console.log('Conectado a Servidor con puerto: ' + PORT)
        })
    } catch (error) {
        console.log(error)
    }
}

main();