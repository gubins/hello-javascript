/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a=0, b=0){return a+b}; console.log(suma());

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function major(exArray = []){
    if (exArray.length==0) return null
    let numMajor=exArray[0]
    for(let i=0;i<=exArray.length;i++){
        if (exArray[i]>numMajor) {numMajor=exArray[i]}
        }
    return numMajor
}

let exArray=[1,3654,9,2,493,45]
console.log(major(exArray))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numVocals2(paraula){
    let vocals= new Set(["a","e","i","o","u"])
    let numVocal=0
    for (const lletra of paraula.toLowerCase()) {
        if (vocals.has(lletra)) numVocal++
    }
    return numVocal
}

function numVocals(paraula) {
    const vocals = new Set(["a", "e", "i", "o", "u"]);
    return [...paraula.toLowerCase()].filter(lletra => vocals.has(lletra)).length;
}

console.log(numVocals("supercalifragilisticoespialidoso"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function exMajuscules2(exArrayMinuscules=[]){
    let exArrrayMajuscules=[]
    exArrayMinuscules.forEach(element => {
        exArrrayMajuscules.push(element.toUpperCase())
        });
    return exArrrayMajuscules

}

function exMajuscules(exArrayMinuscules = []) {
    return exArrayMinuscules.map(element => element.toUpperCase());
}


console.log(exMajuscules(["hola","que","tal"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimer(numero){
    //si el múmero és parell i més gran que 2, no és primer
    if (numero<2) return false
    if (numero==2) return true
    if ((numero%2==0)&&(numero>2)) return false
    // numero de divisions = (numero)^2
    // si existeixen % =0 al quan es divideixi el numero per tots els números divisor, vol dir que  no és primer
    let numDivisions=Math.floor(numero**0.5)
    for (let i=3;i<=numDivisions;i+=2){
        if((numero%i)==0) return false
    }
    return true
}
let numero=3
//console.log((esPrimer(numero))?`El número ${numero} és número primer`:`El número ${numero} no és primer`)


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

//a=[1,2,3,4,5]
//b=[4,5,6,7]
//c=[4,5]

function elComuns(a=[],b=[]){
    let c=[]
    a.forEach(eLement=>inclou(eLement))
    return c
    function inclou(eLement){
        if(b.includes(eLement)) c.push(eLement)
    }
}

function elComuns2(a = [], b = []) {
    return a.filter(eLement => b.includes(eLement));
}

let a=[1,2,3,4,5,90]
let b=[90,4,5,6,7]
console.log(elComuns2(a,b))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaParells2(c=[]){
    let suma=0
    c.forEach(element=>((element%2==0)?suma +=element:suma +=0))
    return suma

}
 
function sumaParells(c = []) {
    let suma = 0;
    c.forEach(element => element % 2 === 0 && (suma += element));
    return suma;
}

console.log(sumaParells(a))


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevarQuadrat(c=[]){
    return(c.map(element => element**=2))
}

console.log(elevarQuadrat(a))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
let text="hola que tal"

function invertirCadena(cadena){
   return cadena.split(" ").reverse().join(" ")
}

console.log(invertirCadena(text))

// 10. Crea una función que calcule el factorial de un número dado

function factorialNum2(c){
    let numFact=1
    for (let i=c;i>1;i--){
        numFact *=i
    }
    return numFact
}

function factorialNum(n, memo = {}) {
    if (n <= 1) return 1;  // Caso base: el factorial de 0 o 1 es 1
    if (memo[n]) return memo[n];  // Si ya está en la memoria cache, devuelve el valor almacenado

    memo[n] = n * factorialNum(n - 1, memo);  // Calcula el factorial y lo guarda en el cache
    return memo[n];
}

console.log(factorialNum(12))
