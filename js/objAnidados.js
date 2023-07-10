/*                           ARREGLO CON OBJETOS ADENTRO */
var especiales =[    /* espciales es un ARREGLO que CONTIENE OBJETOS */
{     /* elemento 0 del arreglo de especiales */
  "local": "pizza hut", 
  "tipo": ['grande','peperoni'],
  "para llevar": false
},
{     /* elemento 1 del arreglo especiales */
  "local": "dominus pizza",
  "tipo": ['mediano','jamon'],
  "para llevar": true
}
              ];
console.log(especiales[0]); // todo
console.log(especiales[0].tipo); //solo me da tipo 
// console.log(especiales[0]["tipo"]);
console.log(especiales[0].tipo[0]); //solo me da el primer elemento de tipo
// console.log(especiales[0]["tipo"][0]);

/*                             OBJETOS ANIDADOS */
var para = "ingredientes";
var receta = {
  "nombre": "pizza",
  "ingredientes":{
    "masa":{"harina":"100grs",
            "sal": "100mg",
            "agua":"50taza"},
    "salsa":{"ketchup": "10grs",
            "azucar": "5cucharadas",
            "sal":"2gr"}
    },
  "fria": true  
};
/* console.log(receta);
console.log(receta.ingredientes);
console.log(receta.ingredientes.masa);
console.log(receta.ingredientes.masa.agua); 
console.log(receta["ingredientes"]["masa"]["agua"]); */
