const Cryptr = require('cryptr');
const cryptr = new Cryptr('LlavaSecretaPara');

class Pelicula {
    #secreto
    #secretoEncriptado

    id
    Nombre_Pelicula
    Ano
    descripcion 
    accion 

    #prepararSecreto(){
        this.#secretoEncriptado = cryptr.encrypt(this.#secreto)
    }
    get obtenerSecreto(){
        return this.#secretoEncriptado
    }

    Presentarse(){
        console.log("Nombre de la pelicula es:", this.Nombre_Pelicula);
        console.log("Año de la pelicula:", this.Ano);
        console.log("Tipo de accion:", this.accion);
        
    }
} 
   
module.exports = {Pelicula}


