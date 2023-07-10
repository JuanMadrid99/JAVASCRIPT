//permiten proteger la data del objeto
// nos permiten obtener los valores de una propiedad privada
class libro {
    constructor(autor) {
        this._autor = autor // no se deberia modificar ese valor, solo se deberia usar internamente en esa clase 
    }
    get autor() {
        console.log('getter');
        return this._autor;
    } 
    // nos prmite acceder a ese valor de forma indirecta asi protegemos el valor, no lo estamos cambiando directamente 

    set autor(nuevoAutor) {
        // puede tener una condificon para asignarlo si es valido
        if (typeof nuevoAutor === "string") {
            console.log('setter');
            this._autor = nuevoAutor;
        }
        else { console.log("El Autor no es Valido"); }
    }
    // nos permite actualizar el valor y verificar si es valido
}
const libro1 = new libro("anonimo")
console.log(libro1.autor); // se llama gracias al getter

libro1.autor = "Juan Madrid"; // actualizacmos el valor gracias al setter
console.log(libro1.autor);

//autor no valido Ejemplo
const libro2 = new libro(25); // esta es una signacion por ende si toma el 25
libro2.autor = 26; // pero no deja actualizar a un numero ya que se condiciona actualizar solo strings
console.log(typeof (libro2.autor), libro2.autor);