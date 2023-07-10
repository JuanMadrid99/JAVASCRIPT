/* Nos permite escribir codigo una sola vez y reusarlo para crear tantos objetos como nesecitemos en nuestro programa */
// no tiene todas las capacidades de una clase de otros lenguiajes de programacion asi que es solo como un objeto
class NaveEspacial { //convencion las clases comienzan con letras mayusculas  
    constructor(planeta) { //plantilla general para un tipo de objeto
        this.planeta = planeta
    } //es la funcion que se va a llamar automaticamente cuando creemos un objeto de este tipo (NaveEspacial) y va a tomar el parametro que definimos (planeta)
}/* objeto (NaveEspacial) tendra una propiedad llamada (this.planeta === NaveEspacial.planeta), osea vamos a asignar el valor del parametro a la propiedad del objeto que estamos creando */
var zeus = new NaveEspacial("Jupiter");
//new para crear un nuevo objeto seguido del nombre de la clase(argumentos que requiera el constructor, En este claso un planeta) 
/* Asi que estamos creando un objeto de tipo (NaveEspacial) que va a tener una propiedad (planeta = jupiter) */
console.log(typeof (zeus), zeus.planeta); // Zeus es un objeto
//otro ejemplo
var apolo = new NaveEspacial("Marte");
console.log(apolo.planeta);

// Ejercicio 
class Mascota {
    constructor(Nombre, edad) {
        this.NombreMascota = Nombre;
        this.edad = edad;
    }
}
var gato = new Mascota("Pichu", 6);
var perro = new Mascota("Nino", 2)
console.log(gato.NombreMascota, gato.edad);
console.log(perro.NombreMascota, perro.edad);
// se pueden trabajar en general como un objeto
