// Definición de la clase abstracta
function Figura() {
  if (this.constructor === Figura) {
    throw new Error("No se puede instanciar una clase abstracta.");
  }
}

// Método abstracto
Figura.prototype.calcularArea = function() {
  throw new Error("El método 'calcularArea' debe ser implementado por las subclases.");
};

// Subclase que hereda de Figura
function Rectangulo(base, altura) {
  Figura.call(this);
  this.base = base;
  this.altura = altura;
}

Rectangulo.prototype = Object.create(Figura.prototype);
Rectangulo.prototype.constructor = Rectangulo;

// Implementación del método abstracto
Rectangulo.prototype.calcularArea = function() {
  return this.base * this.altura;
};

// Creación de objetos
var figuraAbstracta = new Figura(); // Esto lanzará un error

var rectangulo = new Rectangulo(5, 10);
console.log(rectangulo.calcularArea()); // Salida: 50


