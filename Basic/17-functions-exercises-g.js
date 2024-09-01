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

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado