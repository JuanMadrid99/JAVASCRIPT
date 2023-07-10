/* Ejercicio de code camp en espanol */
/*
Tenemos un objeto que representa parte de una coleccion 
de albunes musicales.
Cada albun tien un numero de identificacion unico (id)
asociado a sus propiedades.
No todos los albunes tienen la informacion completa.
*/
var coleccionDeDiscos = {
    7853:{
        "TituloDelAlbum": "Bee Gees Greastes",
        "Artista": "Bee Gees",
        "Canciones": ["Stayin' Alive"]
    },
    5439:{
        "TituloDelAlbum": "ABBA GOLD"
    }
};
/* Define una funcion actualizarDiscos que tome los siguientes paramentros:
-Discos (El objeto que represtna la coleccion de discos)
-id
-propiedad (artista o cancion)
-valor   

Tu meta es completar la funcion implementandfo las siguintes reglas 
para modificar el objeto pasado a la funcion

(1)-Si valor es una cadena vacia elimina la propiedad del album coreespondinte

(2)-Si propiedad es igual a la cadena de caracteres 'canciones' 
pero el albun no tiene una prpiedad llamada 'canciones' 
crea un arreglo vacion y agrega 'valor' a ese arreglo. 

(3)-si propiedad es igual a la cadena de caracteres 'canciones' 
y valor no es una cadena vacia, agregar valor al final de 
arreglo de canciones del album

(4)-Si 'valor' no es una cadena vacia y 'propiedad' no es igual a 'canciones',
asigna el valor del parametro 'valor' a la propiedad,
Si la propiedad no existe, debes crearla y asignar este valor
*/

function actualizarDiscos(discos,id,propiedad,valor){  
    if(valor===""){   /* (1) */
        delete discos[id][propiedad];
    }
    else if(propiedad==='canciones'){          /* (2) */
        discos[id][propiedad]=discos[id][propiedad] || [];// (3)  /* si el valor esta definido se mantiene igual, si es (undefinided) pasa a ser el valor definido en este caso []  */
        discos[id][propiedad].push(valor);
    }
    else{
        discos[id][propiedad] = valor; 
    }
};
console.log(coleccionDeDiscos[7853].TituloDelAlbum); // bee gees greastes
actualizarDiscos(coleccionDeDiscos,7853,'TituloDelAlbum','',);
console.log(coleccionDeDiscos[7853].TituloDelAlbum); //undefined

console.log(coleccionDeDiscos[5439].Canciones); // undefined
actualizarDiscos(coleccionDeDiscos,5439,'Canciones','Mama Mia',);
console.log(coleccionDeDiscos[5439].Canciones); //Mama Mia