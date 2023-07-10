function trio(numeros,n){
    try {
        var grupo = {
        "0-2": [0,1,2],   //[0,1,2]
        "3-5": [3,4,5,'juan'],   //[0,1,2,3]
        "6-8": [6,7,8],   //[0,1,2]
        "9": [9] //[0]
        };
        if(grupo[numeros][n] === undefined || n === undefined  ){ 
                          //n no es valido Or n no fue digitado
            return grupo[numeros];
        }; 
        return grupo[numeros][n];
    } catch (error) {
        return console.log("PARAMETROS DE BUSQUEDA INCORRECTOS");
    }
}

console.log(trio("0-2",1));
console.log(trio("3-5"));
console.log(trio("9",1));
console.log(trio("10"));
