const express = require('express');
const config = require('config');
const debug = require('debug')('app:inicio');
const usuarios = require('./routes/usuarios');
//const dbDebug = require('debug')('app:db');
//const logger = require('./logger');
const morgan = require('morgan');


const app = express();

// app.get() //Peticion de datos al servidor
// app.post(); //Envio de datos al servidor
// app.put(); //Atualizacion de datos al servidor
// app.delete(); //Eliminacion de datos al servidor

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api/usuarios', usuarios);

//app.use(logger);
// app.use((req, res, next) => {
//     console.log('Autenticacion.....');
//     next();
// })

//Configuracion de entornos
console.log('Aplicacion: ' + config.get('nombre'));
console.log('BD server: ' + config.get('configDB.host'));

//Uso de middleware de tercero - MORGAN
if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    //console.log('Morgan Habilitado');
    debug('Morgan Esta Habilitado.');
}

// Trabajos DB
debug('Conectando con la base de datos.');


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
});
