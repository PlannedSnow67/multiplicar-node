//Requireds
const fs = require('fs');
const  colors = require('colors');




let listarTabla = (base, limite) => {

    let tabla = '';

    for (let i = 0; i < limite; i++) {

        tabla += (`${base} * ${i+1} = ${base * (i+1)}\n`);
        
    }
    console.log(tabla.green);
}



let crearArchivo = ( base, limite ) => {

    return new Promise( (resolve, reject) => {

        let tabla = '';

        if(!Number(base)) {

            reject(`${base} no es un numero`);
            return;
        }

        for (let i = 0; i < limite; i++) {

            tabla += (`${base} * ${i+1} = ${base * (i+1)}\n`); 
    
        }
    
        fs.writeFile(`tablas/tabla-${ base }.txt`, tabla, (err) => {
    
            if (err){
                reject(err)
            } else{
                resolve( `tabla-${base}.txt`);
            }
                
            
        });
    });
    

}

module.exports = {
    crearArchivo,
    listarTabla
}