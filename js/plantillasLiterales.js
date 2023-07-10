var  nombre= "Juan";
var  edad=23;
var gustos = ["Pop","Accion"];
var mascotas = {
    gato:"pichu",
    perro:"nino"
}
console.log(`${nombre} tiene ${edad} años, le gusta ${gustos}`); // el arreglo muestra los elementos 
console.log(`${nombre} tiene ${edad} años, le gusta ${JSON.stringify(gustos)}`); // el arreglo se muestra como arreglo
console.log(`Sus mascotas son ${mascotas.gato} y ${mascotas.perro}`);