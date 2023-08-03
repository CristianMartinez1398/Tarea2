const {Persona} = require('./Modelo/Persona')

const persona_1 = new Persona();
persona_1.id = 1
persona_1.Nombre = "Andrea"
persona_1.Apellido = "López"
persona_1.Edad = 23
persona_1.Genero = "Mujer"

console.log(persona_1);
console.log("-------------------------------------------------------");
/*
Modificar
Find
Filter
Delete
*/

let datos_Persona = [
    {
       id: 1,
       Nombre: "Carlos",
       Apellido: "Peña",
       Edad: 45,
       Genero: "Masculino"
    },
    {
        id: 2,
       Nombre: "Karla",
       Apellido: "Sauceda",
       Edad: 35,
       Genero: "Femanino"
    },
    {
        id: 3,
       Nombre: "Fernanda",
       Apellido: "Hernandez",
       Edad: 75,
       Genero: "Femenino"
    },
    {
        id: 4,
       Nombre: "Cristian",
       Apellido: "Martinez",
       Edad: 25,
       Genero: "Masculino"
    },
    {
        id: 5,
       Nombre: "Ricardo",
       Apellido: "Lopez",
       Edad: 20,
       Genero: "Masculino"
    },
    {
        id: 6,
       Nombre: "Andrea",
       Apellido: "Lopez",
       Edad: 82,
       Genero: "Femenino"
    }
]
console.log(datos_Persona);
console.log("----------------------------------------");
//Modificar
const persona_modificar = datos_Persona.find((datos_Persona) => datos_Persona.id === 2)
persona_modificar.Edad = 23
console.log(datos_Persona);
console.log("----------------------------------------");
//Find
const PersonaEncontrada = datos_Persona.find(function (datos_Persona){
    return datos_Persona.id === 2
})
console.log(PersonaEncontrada);
console.log("----------------------------------------");
//Filter
const persona  = datos_Persona.filter((datos_Persona) => datos_Persona.Apellido === "Lopez")
console.log(persona);
console.log("-----------------------------------------");
datos_Persona = datos_Persona.filter((datos_Persona) => datos_Persona.id !== 6)
console.log(datos_Persona);

