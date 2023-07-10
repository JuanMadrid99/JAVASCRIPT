
// ===========FUNCIONES ANONIMAS===========
const fecha = function () {
    return new Date();
}
const sumarTres = function(x){return x + 3};


//=========== FUNCIONES FLECHA============
const fecha2 = () => new Date();
// ================FUNCIONES FLECHA CON PARAMETROS================
const sumarTres2 = (x) => x+3;

console.log(sumarTres2(3));

// EJEMPLO CON CONCATENAR ARREGLOS
const concatenarArreglos = (arra1, arra2) => arra1.concat(arra2);

console.log(concatenarArreglos([1,2],[3,4]));
// IGUALMENTE SE LE PUEDE PONER LAS LLAVES {}

const sumar = (x,y) => {
    let num = 6;
    return (x+y+num);
}
console.log(sumar(1,1)); //debe ser 8

// SE LE PUEDE DAR VALORES CON NUMERO POR DEFECTO
const restar = (x,y=1) => x+y; 
console.log(restar(1)); // Y sera por defecto 1
console.log(restar(1,2));// Y se reemplaza por 2



/* TERNARIO CON FUNCIONES FLECHA */
// Ternary function sintax: (condition)? condition is true: condition is false; 
// Arrow Function sintax: const variable = (parameters) => procedure ("{return}");
const ternarioFunction = (age) => age>=18 ? "Is an adult":"Is not an adult";
console.log(ternarioFunction(19));  
console.log(ternarioFunction(17));
// mas complejo
const adulto = (age,adult=18) => age>adult ? "Is an adult"
    : age = adult ?"Is not an adult"
    : age < adult ? "considered an adult": "not defined";
console.log(adulto(8));

