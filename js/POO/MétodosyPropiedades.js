/* Métodos y propiedades: En POO, los métodos son las funciones asociadas a un objeto y 
las propiedades son las características o datos que tiene un objeto. En JavaScript, 
puedes definir métodos y propiedades dentro de una clase o como funciones y variables fuera de una clase. */
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre; // Propiedad pública
      this.edad = edad; // Propiedad pública
    }
  
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`); // Método público
    }
  }
  
  const persona = new Persona("Ana", 25);
  console.log(persona.nombre); // Output: Ana
  console.log(persona.edad); // Output: 25
  persona.saludar(); // Output: Hola, soy Ana y tengo 25 años.
  /* En este ejemplo, la clase Persona tiene propiedades públicas nombre y edad, y un método público saludar() que muestra un saludo utilizando estas propiedades. */