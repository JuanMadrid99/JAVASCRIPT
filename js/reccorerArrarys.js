var numeros1 = [1,2,3,4,5,6,7,8,9,10,11,12];

var numeros2 = [[1,2,3],[4,5,6],[7,8,9],];

var numeros3 = [[[1,2],[3,4],[0,0]],[[5,6],[7,8],[99,88,77,66,55]],[[9,10],[11,12],[0,0]],[[13,14],[15,16],[0,0]]];
console.log(numeros3.length);
console.log(numeros3[0].length);
console.log(numeros3[0][0].length); console.log(numeros3[1][2].length);

function recorrer(numeros) {
if(numeros[0][0][0]!==undefined){
    for(let i = 0; i<numeros.length;i++){   
        for(let j = 0; j<numeros[i].length;j++){     
            for(let k = 0; k<numeros[i][j].length;k++){
                var numeritos = numeros[i][j][k];
                console.log(numeritos*(-1));
            }
        }
    }
}
else{ console.log('no se puede');}
return numeritos;
} 

/* 
console.log(numeros1.length);
console.log(numeros2.length);
console.log(numeros3.length);  
*/   
// recorrer(numeros1);
// recorrer(numeros2);
recorrer(numeros3);
