var contactos=[
    {"nombre": "Nova",
    "apellido": "Nav",
    "numeros": "2342355345",
    "gustos": ['Pizza','Programacion']},
    {"nombre": "Harry",
    "apellido": "Potter",
    "numeros": "45645643234",
    "gustos": ['Magia','Hechizeria']},
    {"nombre": "Juan",
    "apellido": "Madrid",
    "numeros": "201200071",
    "gustos": ['Peliculas','Juegos']}

];
function buscarPerfil(Nombre,valor){
    for (let i = 0; i < contactos.length; i++) {
        var element = contactos[i];
        if(contactos[i].nombre===Nombre){
            return contactos[i][valor] || 'EL valor que busca no existe';
        }
        
    }

    return "No se encontro dicha persona";
}
console.log(buscarPerfil("Juan","gustos"));
console.log(buscarPerfil("Juan","sangre"));
console.log(buscarPerfil("Miranda","gustos"));