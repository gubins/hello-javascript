/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray=[1,2,3,4]

let [valor1,valor2]=myArray
console.log(valor1)
console.log(valor2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [valor21,valor22,,,valor23=99]=myArray
console.log(valor21)
console.log(valor22)
console.log(valor23)

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let objecte={
    vol1:"primer",
    vol2:"segon",
    subOjecte:{
        subVol1:"tercer",
        subVol2:"quart"
    }
}
let {vol1,vol2}=objecte
console.log(vol1)
console.log(vol2)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {vol1:primerobjecte,vol2:segonobjecte}=objecte
console.log(primerobjecte)
console.log(segonobjecte)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let {subOjecte: {subVol1:tercerobjecte},subOjecte: {subVol2:quartobjecte}}=objecte
console.log(tercerobjecte)
console.log(quartobjecte)


// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray2=[5,6,7,8]
let myArray3=[...myArray,...myArray2]
console.log(myArray3)

// 7. Usa propagación para crear una copia de un array

let myArray4=[...myArray3]
console.log(myArray4)

// 8. Usa propagación para combinar dos objetos en uno nuevo
let objecte2={
    vol3:"cinque",
    vol4:"sise"
}
let objecte3={
    vol5:"sete",
    vol6:"vuite"
}

let objecte4={...objecte2,...objecte3}
console.log(objecte4)

// 9. Usa propagación para crear una copia de un objeto
let objecte5={...objecte4}
console.log(objecte5)

// 10. Combina desestructuración y propagación
let objecte6={...objecte5,subOjecte: {subVol1:tercerobjecte},subOjecte: {subVol2:quartobjecte}}
console.log(objecte6)