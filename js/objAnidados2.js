function comida(){
    var dato = document.getElementById("dato").value;
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
document.getElementById('texto').innerHTML = dato;

return console.log(receta[dato]);
}

