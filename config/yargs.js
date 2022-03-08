const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    defaut: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza una tarea por hacer', {
        descripcion,
        completado

    })
    .command('borrar', 'borra una tarea por hacer', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}