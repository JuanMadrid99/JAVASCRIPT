/* DESESTRUCTURALIZACION TOMA LOS VALORES DEL OBJETO CON EL MISMO NOMBRE DE LOS ARGUMENTOS DADOS  */
const usuario = {
    edad: 23,
    nombre: "juan",
    apellido : "madrid",
    "gustos generales": {
        musica: "indie",
        pelicula: "sci-fi"
    }
}
const {edad,nombre,apellido} = usuario;
console.log(edad);

const {"gustos generales": {musica: generoMusical, pelicula}} = usuario;
console.log(generoMusical);
// console.log(typeof(apellido));


// console.log(GustosMusica, GustosPeliculas);


// con funcion flecha 
const datos = ({nombre,edad}) => { 
    console.log(nombre, edad);
}
datos(usuario);
