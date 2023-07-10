// =====================HACER QUE UN OBJETO NO SE PUEDA MODIFICAR=====================
let colores = {
"ROJO":"#FF0000",    
"VERDE":"#00FF00",
"AZUL":"#0000FF",
"BLANCO":"#FFFFFF",
"NEGRO":"#000000"    
}
Object.freeze(colores);
colores.AZUL= "#111111"; // no modifico nada
console.log(colores);


let deportes = {
    "football":"pelota",
    "basketball":"canasta",
    baseball:{
        persona:"casco",
        campo:"marcas",
        estadio:"red"
    }
}


//  ====================EL OBJETO DEBE QUEDA COMO PELOTA====================
Object.freeze(deportes);
console.log(deportes.football);
deportes.football='nada';
console.log(deportes.football);  
//  ====================EL OBJETO dentro del otro objeto debe qeuda intacto====================
console.log(deportes.baseball);
deportes.baseball = 'nada';
console.log(deportes.baseball);
delete colores.AZUL;
console.log(colores.AZUL);


/* //  ====================EL OBJETO DEBE QUEDA COMO PELOTA    PERO SE MODIFICA====================
Object.freeze(deportes.baseball);
console.log(deportes.football);
deportes.football='nada';
console.log(deportes.football);  
//  ====================EL OBJETO dentro del otro objeto debe qeuda intacto     PERO NO LO HIZO====================
console.log(deportes.baseball);
deportes.baseball = 'nada';
console.log(deportes.baseball);
 */