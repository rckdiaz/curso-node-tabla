const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {

        let salida, consola = '';

        for(let i =1; i<=hasta; i++ ){
            salida  += `${base} x ${i} = ${base * i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i} \n`;
        }
        if( listar ){
            console.log('===================='.green);
            console.log('Tabla del:'.red, colors.blue(base));
            console.log('===================='.green);
            console.log(consola);
        }

        // fs.writeFile( `tabla-${base}.txt`, salida, () => {
        //     if(err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // })

        //writeFileSync (es mejor que la opcion de arriba)
        //la diferencia que si sucede un error habría que atraparlo con un try catch
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt creado`;
    } catch (err) {
        throw err
    }
}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}