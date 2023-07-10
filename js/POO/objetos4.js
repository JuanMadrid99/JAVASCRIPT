// objetos mas consiso
const crearPersona = (nombre,edad,idioma) => ({nombre,edad,idioma})
console.log(crearPersona("Juan",23,"Ingles"));
/* { nombre: 'Juan', edad: 23, idioma: 'Ingles' } */
// ({}) QUEREMOS RETORNAR UN OBJETO