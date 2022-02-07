const fs = require('fs');

let crearSerie = (cantidad) => {

    return new Promise((resolve, reject) => {
        let fibo1 = 1;
        let fibo2 = 1;
        let serie = '';

        serie += (`${fibo1}`);
        for (i = 2; i <= cantidad; i++) {
            serie += (`\t${fibo2}`);
            fibo2 += fibo1;
            fibo1 = fibo2 - fibo1;
        };

        fs.writeFile('fibonacci.txt', serie, (err) => {
            if (err) reject('Error al guar el archivo.');
            else resolve('El archivo se guardo correctamente.');
        });
    })
};

module.exports = {
    crearSerie
};