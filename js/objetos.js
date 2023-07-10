var resultados = {
  1: "ana123",
  2: "juan321",
  3: "gustavo456",
  4: "pam654"
};
var miPerro = {
    "nombre" : "cesar",
    "raza" : "chihuahua",
    "apodo" : "nino", 
    "edad": 1,
    "color de pelo": "cafe con blanco", 
    "caracteristicas": ["alegre","cobarde"]
};
// console.log(resultados.1)
console.log(miPerro.nombre);
console.log(miPerro.raza);
console.log(miPerro["color de pelo"]);

const res = 2;
console.log(resultados[res]);

miPerro["color de pelo"] = "blanco con manchas cafes";
console.log(miPerro["color de pelo"]);
console.log(miPerro["caracteristicas"]);  //console.log(miperro.caracteristicas);

miPerro.caracteristicas.push("pequennio"); //agregar un nuevo elemento a la lista
console.log(miPerro);

//agregar un nuevo elemento la objeto 
miPerro.ojos="cafes";
miPerro["higiene"] = "sucio";
console.log(miPerro);

//eliminar un elemento en el objeto 
delete miPerro.higiene;
delete miPerro["ojos"];
console.log(miPerro);

// //objeto dentro de una funcion
// function FUNCION(ATRIBUTO){
//   var OBJETO = {
//     1: "ELEMENTO 1",
//     2: "ELEMENTO 2",
//     3: "ELEMENTO 3",
//     4: "ELEMENTO 4"
//   };
//   return OBJETO[ATRIBUTO];
// };
// console.log(FUNCION(2)); //2 es el atributo que mandamos

// 
function buscarPuesto (puesto){
  var posiciones = {
    1: "primero",
    2: "segundo",
    3: "tercero",
    4: "cuarto"

  };
  return posiciones[puesto];
}
console.log(buscarPuesto(1));


console.log("probando cosas");
function datos(info,x){
  try {  
      var alumnos = {                   // [apellido,edad,estado civil]
        Didier: ["Morel",23,"Casado"],
        "Lauren": ["Romero",24,"Soltera"], 
        "Oscar": ["Perez",25,"Casado"],
        "Juan": "Madrid"    
      }
      if(x === undefined){
        return alumnos[info];
      }
      return alumnos[info][x];
  } catch (error) { 
  }
}

console.log(datos("Didier",0));
console.log(datos("Lauren",1));
console.log(datos("Oscar"));
console.log(datos("Juan"));

