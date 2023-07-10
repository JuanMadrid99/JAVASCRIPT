class Usuario {
    constructor(nombre,password){
        this.nombreU = nombre;
        this.contra = password;
    }
    saludo(){
        return `Bienvenido ${this.nombreU}`;
    }
}

class Postulante extends Usuario{
    constructor(nombre,password,identidad){
        super(nombre,password)
        this.Nidentidad = identidad;
    }
    verificado(){
        return `Hola ${this.nombreU} con identidad: ${this.Nidentidad}`;
    }
}
class Empresa extends Usuario{
    constructor(nombre,password,codigo){
        super(nombre,password); 
        this.codigoE = codigo;
    }
    verificado(grito=''){
        return `Bienvenido ${this.nombreU} con codigo: ${this.codigoE} ${grito}`;
    }
}

const root = new Usuario("Root","1234");
// console.log(root.saludo());

const postulante = new Postulante("Sandro","contra","987654");
// console.log(postulante.verificado());

const empresa = new Empresa("UNAHVS","pumas","lucem");
// console.log(empresa.nombreU,empresa.contra,empresa.codigoE);
console.log(empresa.verificado());

// console.log(empresa);

