// SERIE DE FIBONACCI
// 1    1       2       3       5       8       13      21
// 1 (1 + 0) (1 + 1) (2 + 1) (2 + 3) (3 + 5) (5 + 8) (8 + 13)

const serie = require('./serie');

let argv = process.argv;
//console.log(argv);
let valor = argv[2].split('=')[1];
let cantidad = valor;

serie.crearSerie(cantidad)
    .then(msjOk => console.log(msjOk))
    .catch(msjErr => console.log(msjErr));