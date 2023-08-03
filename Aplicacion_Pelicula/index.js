const {Pelicula} = require('./Modelo/Peliculas')


const pelicula1 = new Pelicula();
pelicula1.id = 1
pelicula1.Nombre_Pelicula = "IronMan"
pelicula1.Ano = 2013
pelicula1.descripcion = "Es un heroe que vuela con un traje de metal y ayuda a la sociedad."
pelicula1.accion = "Ciencia ficcion"

console.log(pelicula1);

pelicula1.Presentarse();

console.log("--------------------------------------------");

let dato_Pelicula = [
    {
        id: 1,
        Nombre_Pelicula: "Avenger",
        Anos: 2015,
        descripcion: "Los heroes pelean con un extraterrestre.",
        accion: "Ciencia Ficcion"
    },
    {
        id: 2,
        Nombre_Pelicula: "Megan",
        Anos: 2019,
        descripcion: "Es una pelicula de miedo.",
        accion: "Terror"
    },
    {
        id: 3,
        Nombre_Pelicula: "Yo antes de ti",
        Anos: 2020,
        descripcion: "Es una pelicula de romance para las mujeres.",
        accion: "Romance"
    },
    {
        id: 4,
        Nombre_Pelicula: "Dios no esta muerto",
        Anos: 2015,
        descripcion: "Es una pelicula que un maestro no cree en Dios.",
        accion: "Cristiana"
    }
]
console.log(dato_Pelicula);
console.log("-----------------------------------------------");
//Modificar
const pelicula_modificar = dato_Pelicula.find((dato_Pelicula) => dato_Pelicula.id === 2)
pelicula_modificar.Anos = 2013
console.log(dato_Pelicula);
console.log("----------------------------------------");
//Find
const PeliculaEncontrada = dato_Pelicula.find(function (dato_Pelicula){
    return dato_Pelicula.id === 2
})
console.log(PeliculaEncontrada);
console.log("----------------------------------------");
//Filter
const pelicula  = dato_Pelicula.filter((dato_Pelicula) => dato_Pelicula.Anos === 2015)
console.log(pelicula);
console.log("-----------------------------------------");
//Delete
dato_Pelicula = dato_Pelicula.filter((dato_Pelicula) => dato_Pelicula.id !== 4)
console.log(dato_Pelicula);