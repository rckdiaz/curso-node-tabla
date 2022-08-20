const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe:'La cantidad que se multiplique'
    })
    .check( (argv, options) => {
    console.log('yargs', argv);
        if ( isNaN( argv.b ) ){
            throw 'La base tiene que aser un número'
        }
        return true;
    })
    .argv;

module.exports = argv;