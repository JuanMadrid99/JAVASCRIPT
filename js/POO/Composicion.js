/* Composición: La composición es un principio en el que las clases pueden estar compuestas por otras clases, 
lo que permite construir objetos complejos al combinar instancias de clases más pequeñas. 
Esto fomenta la reutilización del código y facilita la creación de estructuras jerárquicas. */

class Persona {
    constructor(nombre, edad) {
      this._nombre = nombre;
      this._edad = edad;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(nuevaEdad) {
      if (nuevaEdad >= 0) {
        this._edad = nuevaEdad;
      }
    }
  }
  
  const persona1 = new Persona("Juan", 30);
  console.log(persona1.nombre); // Salida: Juan
  console.log(persona1.edad); // Salida: 30
  
  persona1.nombre = "Pedro";
  console.log(persona1.nombre); // Salida: Pedro
  
  persona1.edad = -5; // No se actualiza debido a la validación en el setter
  console.log(persona1.edad); // Salida: 30
  