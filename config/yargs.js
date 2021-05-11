const { number } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en la consola'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Número hasta el que queremos llegar'
    })
    .check( (argv, options) => {
        if( isNaN( argv.b)){
            throw 'La base tiene que ser un número';
        }
        if( isNaN( argv.h)){
            throw 'Valor hasta tiene que ser un número';
        } else if ((argv.h < 1) || (argv.h >100)) {
            throw 'Valor hasta tiene que ser entre 1 y 100';
        }
        return true;
    })    
    .argv;

module.exports = argv;