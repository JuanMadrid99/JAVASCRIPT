/* Encapsulación: La encapsulación se refiere a la capacidad de ocultar los detalles internos de un objeto y 
proporcionar una interfaz externa para interactuar con él. En JavaScript, 
esto se puede lograr utilizando closures, funciones y convenciones de nomenclatura para indicar la visibilidad de las propiedades y 
métodos. */

// Ejemplo de encapsulación utilizando closures
function Persona(nombre, edad) {
  let _nombre = nombre; // Propiedad privada

  this.edad = edad; // Propiedad pública

  this.getNombre = function() {
    return _nombre; // Método público para obtener el nombre
  };

  this.saludar = function() {
    console.log(`Hola, soy ${_nombre} y tengo ${this.edad} años.`); // Método público para saludar
  };
}

const persona = new Persona("Juan", 30);
console.log(persona.getNombre()); // Output: Juan
persona.saludar(); // Output: Hola, soy Juan y tengo 30 años.

/* En este ejemplo, utilizamos un closure para encapsular la propiedad _nombre dentro de la función Persona. 
La propiedad _nombre es privada y solo se puede acceder a ella a través del método público getNombre(). */