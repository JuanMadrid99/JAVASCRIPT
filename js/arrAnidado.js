var asce = [[1,2,3],[4,5,6],[7,8,9]];
// function ordenarA (arreglo){
//     for(let k=0;k<arreglo.length;k++){
//         for(let i=0;i<arreglo.length;i++){
//             for(let j=0;j<arreglo.length;j++){
//                 var cont = arreglo[i][j];
//                 if(arreglo[i][j]<arreglo[i][j+1]){
//                     arreglo[i][j]=arreglo[i][j+1];
//                     arreglo[i][j+1]=cont;
//                 }
//             }
//         }
//     }
//     // [ [ 3, 2, 1 ], [ 6, 5, 4 ], [ 9, 8, 7 ] ]
//     for(let c=0;c<arreglo.length;c++){
//         for(let a=0;a<arreglo.length-1;a++){
//             for(let b=0;b<arreglo.length;b++){
//                 // console.log(arreglo[a][b]);    //a=0 b=0 === 3
//                 // console.log(arreglo[a+1][b]);  //a=1 b=0 === 6
//                 // console.log(arreglo[a][b]<arreglo[a+1][b]);  //3<6
//                 var cont2 = arreglo[a][b];
//                 if(arreglo[a][b] < arreglo[a+1][b]){    
//                     arreglo[a][b]=arreglo[a+1][b];
//                     arreglo[a+1][b]=cont2;
//                 }
//             }
//         }
//     }    
//     return arreglo;
// }

/* ++++++++++++++++++++++++++++++++++++VERSION RESUMIDA++++++++++++++++++++++++++++++++++++ */
var asce = [[1,2,3],[4,5,6],[7,8,9]];
var numeros = [[10,02,13],[47,15,666],[17,18,99]];
var nombres = [["a","b","c"],["d","e","f"],["g","h","i"]];
function ordenarA (arreglo){
    for(let k=0;k<arreglo.length;k++){
        for(let i=0;i<arreglo.length;i++){
            // var contenedor = arreglo[i];
            // console.log(contenedor);
            for(let j=0;j<arreglo.length;j++){
                // console.log(contenedor[j]);
                var cont = arreglo[i][j];
                if(arreglo[i][j]<arreglo[i][j+1]){
                    arreglo[i][j]=arreglo[i][j+1];
                    arreglo[i][j+1]=cont;
                }
                var cont2 = arreglo[i][j];
                if(arreglo[i][j] < arreglo[i+1][j]){    
                    arreglo[i][j]=arreglo[i+1][j];
                    arreglo[i+1][j]=cont2;
                }
            }
        }
    }
return arreglo;
}

console.log(ordenarA(asce));

/* console.log(ordenarA(numeros));
console.log(ordenarA(nombres)); */

