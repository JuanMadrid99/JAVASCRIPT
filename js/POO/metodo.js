/* Si el valor de una propiedad es una funciön, se denomina "método" */
const persona = {
    nombre:"juan",
    presentarse: function(){ 
        return `hola mi nombre es ${this.nombre}` //persona.nombre... this se refiere al objeto con el que estamos trabajando
    }
};
console.log(persona.presentarse()); //hola mi nombre es juan
// Estandar ES6
const personaES6 = {
    nombre:"juan",
    presentarse(){ 
        return `hola mi nombre es ${this.nombre}` //persona.nombre... this se refiere al objeto con el que estamos trabajando
    }
};