

// console.log(Math.floor(Math.random() * 91) + 10);
function aleatorio(max,min){
    return Math.floor(Math.random()*(max-min+1))+min;
}
    var cont = 0;
for (let index = 0; index < 100; index++) {
    if(aleatorio(10,1)==10){
        console.log("si sale");
        cont++;
    };
    
}
console.log(cont);

/* ==================== PARSE INT ====================*/
var n1 = parseInt("7");
var n2 = parseInt("6");
console.log(n1+n2);
console.log(parseInt('11111111',2)); /* Binario */
console.log(parseInt("0xF"));
console.log(parseInt("FFF",16)); 
/* Hexadecimal 1111-1111-1111 = 1+2+4+8+16+32+64+128+256+512+1024+2048*/
console.log(parseInt("3E0A"));
// Hexadecimal 0011-1110-0000-1010 = 
console.log((0+0+8192+4096)+(2048+1024+512+0)+(0+0+0+0)+(8+0+2+0));
// (32768+16384+8192+4096)+(2048+1024+512+256)+(128+64+32+16)+(8+4+2+1)