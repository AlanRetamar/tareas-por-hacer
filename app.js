const argv = require('./config/yargs').argv
const colors = require('colors')

const {
    crear,
    getListado,
    actualizar,
    borrar
} = require('./por-hacer/por-hacer')

let comando = argv._[0]


switch (comando) {
    case 'crear':
        let crearTarea = crear(argv.descripcion)
        console.log(crearTarea)
        break;

    case 'listar':
        listado = getListado()
        for (let tarea of listado) {
            console.log('========Por Hacer========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('=========================='.green);
        }
        break;

    case 'actualizar':
        let tareaActulizada = actualizar(argv.descripcion, argv.completado)
        console.log(tareaActulizada)
        break;

    case 'borrar':
        console.log(argv.descripcion)
        let borrado = borrar(argv.descripcion)
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
        break;
}