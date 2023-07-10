let a = [1,3,5,6,4,2];
for (let u = 0; u < a.length; u++){
    for (let i = 0; i < a.length; i++) { // 
        if (a[i]>a[i+1])// 
        {
            const aux = a[i];   // 
            a[i]=a[i+1];   //
            a[i+1]=aux;// 
        }     
    }
}
console.log(a);
console.log("Ascendente");
for (let i = 0; i < a.length; i++) { // 
    console.log(a[i]);
}
console.log("Descendente");
for(let i = a.length-1; i>=0; i-- ){
    console.log(a[i]);
}







// for (let i = a.length; i >=0 ; i--) { 
//     const aux = a[i];   
//     if (a[i]>a[i++])
//         {
//             a[i]=a[i-1];    
//             a[i-1]=aux;  
//             i++;
//         }    
//     console.log(a[i]);    
// }
