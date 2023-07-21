class Animal {
	constructor(nombre) {
    this.nombre = nombre;
  }
  saludar() {
  return `Hola, soy ${this.nombre}.`;
  }
}

class Perro extends Animal {
  ladrar() {
    console.log("¡Guau!");
  }
}

// Crear una instancia de la clase Perro
const miPerro = new Perro("Firulais");

// Acceder a las propiedades y métodos heredados de Animal
console.log(miPerro.nombre); // Output: Firulais
miPerro.saludar(); // Output: Hola, soy Firulais.

// Llamar al método específico de Perro
miPerro.ladrar(); // Output: ¡Guau!
