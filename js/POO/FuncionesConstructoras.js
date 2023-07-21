/* Las funciones constructoras en JavaScript son funciones especiales que se utilizan para crear objetos. 
Actúan como plantillas para crear múltiples objetos con propiedades y métodos similares. 
Las funciones constructoras se definen utilizando el enfoque tradicional de funciones en JavaScript y se invocan utilizando el operador new. */
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  
    this.saludar = function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
  }
  
  // Crear instancias de objetos utilizando la función constructora
  const persona1 = new Persona("Juan", 30);
  const persona2 = new Persona("María", 25);
  
  persona1.saludar(); // Output: Hola, soy Juan y tengo 30 años.
  persona2.saludar(); // Output: Hola, soy María y tengo 25 años.
/* En este ejemplo, la función Persona se define con dos parámetros nombre y edad. 
Dentro de la función, se utilizan las palabras clave (this) para asignar los valores de los parámetros a las propiedades nombre y edad del objeto 
que se está creando. Además, se define el método saludar() dentro de la función constructora 
para que cada instancia de Persona tenga su propio método saludar().

Luego, utilizamos el operador new para crear dos instancias de Persona llamadas persona1 y persona2. 
Cada instancia tiene sus propias propiedades y métodos, y podemos invocar el método saludar() en cada una de ellas.*/
