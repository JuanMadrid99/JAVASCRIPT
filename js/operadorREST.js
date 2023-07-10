/* Se utiliza cuando no sabemos la cantidad de parametros que mandaremos a una funcion */
// CONVIERTE TODOS LOS ELEMENTOS QUE LE MANDEMOS EN ARREGLOS
// el operador rest es "...VARIABLE"
function variosParametros (...args){
    console.log(args);
}
variosParametros(1);
variosParametros(1,2,3,4,5,6,7,8,9);

// OPERADOR REST EN UNA FUNCTION FLECHA
const valorInicial = 0;
const add = (...elements) => {
    return elements.reduce((contador,valorActual) => contador+valorActual,valorInicial);
}; 
console.log(add(1,2,3,4,99));//10
console.log(add()); //0
/*  EXPLICACION 
    valorInicial = 0, contador = 0, valorActual = 0 ... al mero iniciar
    valor Inicial + valor actual....solo en el primer elemento
    0 + 1 = contador = 1....a partir de aqui 
    CONTADOR + VALOR ACTUAL
    1 + 2 ... contador = 3
    3 + 3 ... contador = 6
    6 + 4 ... contador = 10
    10 + 99 ... contador = 109 
    lo que devuelve es el contador 
    
 */
