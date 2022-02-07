// function saludo(nombre) {
//     console.log(`Hola ${nombre}`);
// };

// saludo('Fede');

//ES5 - Variables
// var nombre = 'Federico';
// console.log(nombre);
//  nombre = 'Ingrid';
// console.log(nombre);


// //ES6 - Variables
// const nombre6 = 'Luis';
// console.log(nombre6);

// let edad = 35;
// console.log(edad);
// edad = 40;
// console.log(edad);


//Funciones en ES5
// const year = [2000, 2005, 2008, 2012];

// var edad5 = year.map(function(el) {
//     return 2021 - el;
// });
// console.log(edad5);

// //Funciones flechas en ES6
// let edad6 = year.map(el => 2021 - el);
// console.log(edad6);

//Funciones CALLBACK
// function mensaje(callback) {
//     console.log('Mensaje antes de la llamada callback');
//     callback();
// }

// function saludo() {
//     console.log('Saludo despues de la llamada al callback');
// }

// mensaje(saludo);
// function sumar(num1, num2, callback) {
//     callback(num1 + num2);
// }

// function resultado(res) {
//     console.log(res);
// }

// sumar(5, 8, resultado);

//setTimeout(() => console.log('El mensaje aparecera dentro de 3 segundos'), 3000);

// PROMESAS
// const mensaje = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         if (false)
//             resolve('El mensaje aparecera dentro de 3 segundos');
//         reject('Hubo un error');
//     }, 3000);
// });
// mensaje
//     .then( msj => {
//         console.log(msj);
//     })
//     .catch( err => {
//         console.log(err);
//     });


// ASYNC - AWAiT
// function mensaje() {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (true)
//                 resolve('El mensaje aparecera dentro de 3 segundos');
//             else
//                 reject('Hubo un error');
//         }, 3000);
//     });
// }

// async function llamadaAsync() {
//     console.log('Llamada...');
//     const resultado = await mensaje();
//     return resultado;
// }

// llamadaAsync().then(resolve => console.log(resolve)).catch(reject => console.log(reject));