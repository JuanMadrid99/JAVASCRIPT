function min(x,y){
    return x < y ? x : y;
    // si X es menor a Y imprime Y si no X 
}
//  console.log(x,y);
    console.log(8<3); //false
    console.log(min(8,3)); //3
    console.log(3<8); //true
    console.log(min(3,8)); //3

console.log("Multiples....");
/* ======================================= MULTIPLES OPERADORES TERNARIOS ======================================= */
function comparar(x,y) {
    return (x===y) ? "X es igual a Y" 
        :  (x < y) ? "X es menor a Y"
        :            "X es mayor a Y";
// (condicion) ? si es True : 
// (condicion) ? si es true :
// si no se cumple ninguna;
}
console.log(comparar(9,9));
console.log(comparar(1,9));
console.log(comparar(9,1));
// ============================== BOOLEAN ==============================
var cierto = true;
var falso = false;
function VoF(para){
    return para ? "Es Cierto" : "Es Falso";
}
console.log(VoF(cierto));
console.log(VoF(falso));
// ====================== globalizacion de las variables ======================
for (let index = 0; index < 3; index++) {
    const element = "constante";
    var variable ="variable";
    let nose = "nose";
    
}
// console.log(element); NO FUNCIONA
console.log(variable); // SI FUNCIONA
// console.log(nose); NO FUNCIONA


function areaCirculo(radio){
    const pi = Math.PI;
    return radio > 0 ? (pi*Math.pow(radio,2)): undefined;  
}
console.log(areaCirculo(1));
console.log(areaCirculo(0));
// Mutar Arreglo Declarado con const

const arreglo1 = [1,2,3,4];
console.log(arreglo1);
arreglo1[0]=5;
arreglo1[1]=[[10,11],[12,13]];
arreglo1[2]={ n1:100, n2:99};
console.log(arreglo1);
