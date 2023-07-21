/* Herencia múltiple: A diferencia de algunos lenguajes de programación que admiten herencia múltiple, 
JavaScript solo permite heredar de una sola clase. Sin embargo, 
puedes lograr funcionalidad similar utilizando técnicas como la mezcla de objetos o la composición. */
class Vuelo {
    volar() {
      console.log("Volando...");
    }
  }
  
  class Nadador {
    nadar() {
      console.log("Nadando...");
    }
  }
  
  class SuperPoderes {
    constructor() {
      this._vuelo = new Vuelo();
      this._nadador = new Nadador();
    }
  
    usarSuperPoderes() {
      this._vuelo.volar();
      this._nadador.nadar();
    }
  }
  
  const superman = new SuperPoderes();
  superman.usarSuperPoderes(); // Salida: Volando...
                               //         Nadando...

//  Herencia múltiple (utilizando mezcla de objetos):
// Clase base
class Animal {
  comer() {
    console.log("Comiendo...");
  }
}

// Mixin
const PuedeVolar = {
  volar() {
    console.log("Volando...");
  }
};

// Clase que utiliza la mezcla de objetos para heredar funcionalidad
class Pajaro extends Animal {}

Object.assign(Pajaro.prototype, PuedeVolar); // Mezcla de objetos

const pajaro = new Pajaro();
pajaro.comer(); // Output: Comiendo...
pajaro.volar(); // Output: Volando...
/* En este ejemplo, tenemos la clase base Animal que define el método comer(). 
Luego, tenemos el mixin PuedeVolar que proporciona el método volar(). 
La clase Pajaro hereda de Animal y luego utilizamos Object.assign() para mezclar la funcionalidad de PuedeVolar en 
el prototipo de Pajaro. */