//funcions

//simple
function miFuncion(){
    console.log('hola funció')
}


//amb parametres

function miFuPa(nom){
    console.log(String(`hola ${nom}`).toLocaleUpperCase())

}
miFuPa("gubi")

//funcions anonimes

//function(parametres){}
//(parametres)=>{}

const miFu2= (nom)=>{
    console.log(String(`hola ${nom}`).toLocaleUpperCase())
}

miFu2("panerola")

setTimeout(()=> {
    console.log("¡Hola desde una función anónima!");
}, 1000);