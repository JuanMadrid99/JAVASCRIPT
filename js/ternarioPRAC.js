// =============================== Ejemplo en funcion con objeto
var usuario = {
    "Nombre":"Juan",
    "Apellido":"Madrid",
    "Edad":"23",
    "Altura":"183cm",
    "Peso":"140",
    "Nivel Academico": ["Ingenieria","Ingles Intermedio"],
    "Gustos": { "Comida": "Pizza", 
                "Color": "Azul"
                }
}
function conocer(dato,elemento){
/*   if (dato==="Todo" || dato ==="") {
        return usuario;
    }
    if (elemento!== undefined) {
        return usuario[dato][elemento];
    }
    return (usuario[dato]!==undefined)? usuario[dato]: "Dato no Encontrado"; */
return (dato==="Todo" || dato ==="") ? usuario
    : (elemento!== undefined)? usuario[dato][elemento] 
    : (usuario[dato]!==undefined)? usuario[dato]: "Dato no Encontrado" ; 
}

console.log(conocer("Todo"));
console.log(conocer("Nombre"));
console.log(conocer("Nivel Academico",0));
console.log(conocer("Gustos","Color"));
console.log(conocer("Grado"));
console.log(conocer("",1));
console.log(conocer(""));