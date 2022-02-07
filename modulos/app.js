// const datos = require('./datos');
// datos.log('Hola mundo por modulo');

// PATH
// const path = require('path');
// const objPath = path.parse(__filename);

// // OS
// const os = require('os');
// const objFremem = os.freemem();
// const objTotalmem = os.totalmem();

// // File System
// const fs = require('fs');
// const objDirSync = fs.readdirSync('./');
// const objDir = fs.readdir('./', (err, files) => {
//     if (err) console.log('Err: ', err)
//     else console.log('Resultado: ', files);
// });
// console.log(objDirSync);

// // EVENTOS
// const events = require('events');
// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('my_event', (arg) => {
//     console.log('data received successfully.', arg);
// });
// eventEmitter.emit('my_event', { id: 1, url: 'http://google.com' });


// HTTP
const http = require('http');
const { json } = require('stream/consumers');
const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Esperando respuestas del servidor');
        res.end();
    }

    if (req.url === '/api/productos') {
        res.write(JSON.stringify(['Mouse', 'Teclado', 'Monitor']));
        res.end();
    }
});

// Server.on('connection', (puerto) => {
//     console.log('Creando nueva conexion...');
// });

Server.listen(3000);

console.log('Server running at puerto 3000');