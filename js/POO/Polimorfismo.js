/* Polimorfismo: El polimorfismo permite que un objeto pueda presentar diferentes formas o comportamientos según el contexto. 
En JavaScript, puedes lograr el polimorfismo utilizando la sobrescritura de métodos y 
la implementación de interfaces o clases abstractas. */
class Animal {
    sonido() {
      console.log("El animal hace un sonido.");
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log("El perro ladra."); // Sobrescritura del método sonido()
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log("El gato maulla."); // Sobrescritura del método sonido()
    }
  }
  
  const animal = new Animal();
  const perro = new Perro();
  const gato = new Gato();
  
  animal.sonido(); // Output: El animal hace un sonido.
  perro.sonido(); // Output: El perro ladra.
  gato.sonido(); // Output: El gato maulla.
  /* En este ejemplo, la clase Animal tiene un método sonido() que muestra un mensaje genérico. 
	Las clases Perro y Gato extienden la clase Animal y sobrescriben el método sonido() con su propio comportamiento específico. 
	Al llamar al método sonido() en cada objeto, se muestra el mensaje correspondiente. */