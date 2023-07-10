// metodo de los arreglos 
let numeros = ["primero","segundo","tercero"];
console.log(numeros);
console.log(numeros[0]);


/* arreglos multidimensional */
numeros[2]=[1,2];
console.log(numeros[2][1]);   /* [0][0] asi se manda a llamar un arreglo adentro de otro */
console.log(numeros);

// al final
numeros.push("tercero");  /* agrega al final */
console.log(numeros);
numeros.pop();              /* elimina al final  */
console.log(numeros);

/* al inicio */
numeros.unshift("cero");    /* agrega al inicio */
console.log(numeros);
numeros.shift();            /* elimina el inicio */
console.log(numeros);