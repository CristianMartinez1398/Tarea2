const {Libro} = require('./Modelo/Libro')

const libro1 = new Libro();
libro1.id = 1
libro1.Nombre = "El libro del niño de la selva."
libro1.Anos = 2008
libro1.accion = "Infantil"

console.log(libro1);
console.log("-------------------------------------------");
let datos_libro = [
    {
        id: 1,
        Nombre: "El libro del niño de la selva",
        Anos: 2008,
        accion: "Infantil"
    },
    {
        id: 2,
        Nombre: "La bobliografia de Steve Jobs",
        Anos: 2012,
        accion: "Historia"
    },
    {
        id: 3,
        Nombre: "Caperusita roja",
        Anos: 2008,
        accion: "Infantil"
    },
    {
        id: 4,
        Nombre: "La ladrona de libros",
        Anos: 2018,
        accion: "Novela"
    }
]
console.log(datos_libro);
console.log("------------------------------------------------");
//Modificar
const libro_modificar = datos_libro.find((datos_libro) => datos_libro.id === 2)
libro_modificar.Anos = 2008
console.log(datos_libro);
console.log("----------------------------------------");
//Find
const libroEncontrada = datos_libro.find(function (datos_libro){
    return datos_libro.id === 2
})
console.log(libroEncontrada);
console.log("----------------------------------------");
//Filter
const libro  = datos_libro.filter((datos_libro) => datos_libro.Anos === 2015)
console.log(libro);
console.log("-----------------------------------------");
//Delete
datos_libro = datos_libro.filter((datos_libro) => datos_libro.id !== 4)
console.log(datos_libro);