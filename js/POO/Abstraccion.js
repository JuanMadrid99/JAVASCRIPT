/* Abstracción: La abstracción se refiere a la capacidad de representar conceptos complejos mediante objetos más simples y comprensibles. 
En JavaScript, puedes utilizar clases y objetos para modelar y representar entidades y conceptos del mundo real. */
class Rectangulo {
    constructor(ancho, alto) {
      this.ancho = ancho;
      this.alto = alto;
    }
  
    calcularArea() { 
      return this.ancho * this.alto;
    }
  }
  
  const rectangulo = new Rectangulo(10, 5);
  console.log(rectangulo.calcularArea()); // Output: 50
/* En este ejemplo, la clase Rectangulo representa un objeto abstracto que tiene propiedades de ancho y alto y un método calcularArea() 
para calcular el área del rectángulo. El usuario puede interactuar con el objeto rectangulo y 
obtener el resultado del cálculo de área sin necesidad de conocer los detalles internos de cómo se realiza el cálculo. */