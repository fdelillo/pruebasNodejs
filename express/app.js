const express = require('express');
const joi = require('joi');
const app = express();

// app.get() //Peticion de datos al servidor
// app.post(); //Envio de datos al servidor
// app.put(); //Atualizacion de datos al servidor
// app.delete(); //Eliminacion de datos al servidor

app.use(express.json());

const usuarios = [
    { id: 1, nombre: 'Federico' },
    { id: 2, nombre: 'Inu' },
    { id: 3, nombre: 'Lu' },
    { id: 4, nombre: 'Luqui' }
];

/************** GET ****************/
app.get('/api/usuarios', (req, res) => {
    res.send(usuarios);
});

app.get('/api/usuarios/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);
});
/************** FIN GET ****************/

/************** POST ****************/
app.post('/api/usuarios', (req, res) => {
    const { error, value } = validarUsuario(req.body.nombre);
    if (!error) {
        const usuario = {
            id: usuarios.length + 1,
            nombre: value.nombre
        };
        usuarios.push(usuario);
        res.send(usuario);
    } else {
        const errMsj = error.details[0].message;
        res.status(400).send(errMsj);
    }
});
/************** FIN POST ****************/

/**************** PUT ******************/
app.put('/api/usuarios/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const { error, value } = validarUsuario(req.body.nombre);
    if (error) {
        const errMsj = error.details[0].message;
        res.status(400).send(errMsj);
        return;
    }
    usuario.nombre = value.nombre;
    res.send(usuario);
});
/**************** FIN PUT ******************/

/**************** DELETE ******************/
app.delete('/api/usuarios/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) {
        res.status(404).send('El usuario no fue encontrado');
        return;
    }

    const index = usuarios.indexOf(usuario);
    usuarios.splice(index, 1);
    res.send(usuario);
});
/************** FIN DELETE ****************/


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}...`);
});

function existeUsuario(id) {
    return (usuarios.find(u => u.id === parseInt(id)));
}

function validarUsuario(nom) {
    const schema = joi.object({
        nombre: joi.string().min(3).required()
    });
    return (schema.validate({ nombre: nom }));
}