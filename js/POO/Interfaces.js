/* Interfaces: Aunque JavaScript no tiene soporte nativo para interfaces, 
puedes simular interfaces utilizando convenciones de nomenclatura y comprobaciones manuales. 
Las interfaces definen un conjunto de métodos y propiedades que una clase debe implementar. */
// Definición de una interfaz
const Figura = {
  calcularArea() {},
  calcularPerimetro() {}
};

// Implementación de una clase que cumple con la interfaz
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea() {
    return this.ancho * this.alto;
  }

  calcularPerimetro() {
    return 2 * (this.ancho + this.alto);
  }
}

const rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.calcularArea()); // Output: 50
console.log(rectangulo.calcularPerimetro()); // Output: 30
/* En este ejemplo, definimos una interfaz Figura que especifica los métodos calcularArea() y calcularPerimetro(). 
Luego, implementamos la clase Rectangulo, que cumple con la interfaz Figura al implementar los métodos requeridos. */