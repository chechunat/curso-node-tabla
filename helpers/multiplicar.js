const colors = require ('colors');
const fs = require('fs');


const crearArchivo = async ( base, listar, hasta ) =>{

    try {
        let salida = "";
        let consola = "";
        let cab_consola, cab_salida = "";
        let titulo="";
        if (base <10) {
            titulo="=====================";
        } else if (base <100) {
                titulo="======================";
            } else {
                titulo = "=======================";
            }
        
        cab_salida = (titulo + "\n");
        cab_salida += ("==== Tabla del " + (base) + " ====\n");
        cab_salida += (titulo + "\n");

        cab_consola = (titulo.blue + "\n");
        cab_consola += ("==== Tabla del ".blue + colors.red(base) + " ====\n".blue);
        cab_consola += (titulo.blue + "\n".blue);

        for(let i=1; i<=(hasta); i++){
            consola += `${colors.yellow(base)} ${colors.green("x")} ${colors.yellow(i) } ${'='.green} ${ colors.yellow (base * i) } \n`;
            salida += `${(base)} ${("x")} ${(i) } ${'='} ${(base * i) } \n`;
        }    

        if (listar){ 
            console.log(cab_consola);
            console.log(consola);
        }
        

        fs.writeFileSync( `./salida/Tabla-${base}.txt`,cab_salida + salida);

        return `Tabla-${ base }.txt`;

    } catch (err) {
        throw(err);
    }
    
}

module.exports = {
    crearArchivo
}