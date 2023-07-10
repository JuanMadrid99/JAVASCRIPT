var asce = [1,2,3,4,5,6,7,8,9];
var numero = [1,3,5,2,4,6];
function ordDesc(arreglo){
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            var cons = arreglo[j];
            if(arreglo[j]<arreglo[j+1]){
                arreglo[j]=arreglo[j+1];
                arreglo[j+1]=cons;
            }
        }
    }
    return arreglo;
}
console.log(ordDesc(asce));
console.log(ordDesc(numero));

