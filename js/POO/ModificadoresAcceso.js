/* Modificadores de acceso: Aunque JavaScript no tiene modificadores de acceso como public, private y protected, 
puedes utilizar convenciones de nomenclatura y patrones de diseño para simular la encapsulación y 
controlar el acceso a las propiedades y métodos. */
// Modificadores de acceso (utilizando convenciones de nomenclatura):
class Persona {
  constructor(nombre, edad) {
    this._nombre = nombre; // Convención de nomenclatura para indicar propiedad privada
    this.edad = edad; // Propiedad pública
  }

  get nombre() {
    return this._nombre; // Getter para acceder a la propiedad privada
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre; // Setter para actualizar la propiedad privada
  }
}

const persona = new Persona("Ana", 30);
console.log(persona.nombre); // Output: Ana
persona.nombre = "María"; // Setter para actualizar la propiedad privada
console.log(persona.nombre); // Output: María
/* En este ejemplo, utilizamos la convención de nomenclatura _nombre para indicar que la propiedad es privada. 
Utilizamos un getter y un setter para acceder y actualizar la propiedad privada nombre desde fuera de la clase. */