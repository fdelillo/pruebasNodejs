const express = require('express');
const rutas = express.Router();
const joi = require('joi');


const usuarios = [
    { id: 1, nombre: 'Federico' },
    { id: 2, nombre: 'Inu' },
    { id: 3, nombre: 'Lu' },
    { id: 4, nombre: 'Luqui' }
];

/************** GET ****************/
rutas.get('/', (req, res) => {
    res.send(usuarios);
});

rutas.get('/:id', (req, res) => {
    let usuario = existeUsuario(req.params.id);
    if (!usuario) res.status(404).send('El usuario no fue encontrado');
    res.send(usuario);
});
/************** FIN GET ****************/

/************** POST ****************/
rutas.post('/', (req, res) => {
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
rutas.put('/:id', (req, res) => {
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
rutas.delete('/:id', (req, res) => {
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



function existeUsuario(id) {
    return (usuarios.find(u => u.id === parseInt(id)));
}

function validarUsuario(nom) {
    const schema = joi.object({
        nombre: joi.string().min(3).required()
    });
    return (schema.validate({ nombre: nom }));
}


module.exports = rutas;