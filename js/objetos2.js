var sangre = {
    1: "A",
    2: "A-",
    3: "B+",
    4: "B-",
    "sangre rara": "A B" 
}
var madre = {
    "nombre": "Karla",
    "Id": "09831256",
    "sangre": sangre["sangre rara"],
    "ocupacion": "Ingenieria", 
    "Hijo": "Carlos"

};
var hijo = {
    "nombre": madre["Hijo"],
    "id": "87324089",
    "sangre": sangre[1],
    "ocupacion": "estudiante"
};
// console.log(madre);
// console.log(hijo);


var casa = {
    "sala": ["muebles","tv","ventilador"],
    "comedor" : ["mesa","sillas","frutas"],
    "cocina" : ["platos","comida","ingredientes"],
    "banno" : ["lavamanos","ducha","inodoro"],
    "cuarto" : ["cama","almohadas","ventana"]
};
function recorrer(lugar){
    if (casa.hasOwnProperty(lugar) === false || casa[lugar] === undefined ) {
        return console.log('lugar no encontrado');
    } 
        return casa[lugar];  
}
console.log(recorrer(""));



// Como recorrer los elementos de un objeto con un ciclo

