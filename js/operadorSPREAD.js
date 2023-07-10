/* Se utiliza cuando queremos que se tomen los valores individuales de un arreglo */
// CONVIERTE TODOS LOS ARREGLOS EN ELEMENTOS INDIVIDUALES
// el operador SPREAD es "...VARIABLE"
const numeros = [1,2,3];
function elementosArreglo (x,y,z){
    console.log(x,y,z);
    console.log(x+y+z);
}
elementosArreglo(...numeros);
