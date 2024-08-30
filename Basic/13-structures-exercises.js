/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
let exArray=['gos','gat','porc','conill','gallina']
console.log(exArray)

// 2. Añade dos más. Uno al principio y otro al final

exArray.unshift('burro')
exArray.push('oca')
console.log(exArray)

// 3. Elimina el que se encuentra en tercera posición
exArray.splice(2,1)
console.log(exArray)

// 4. Crea un set que almacene cinco libros
let exSet =new Set(['llibre 1','llibre 2','llibre 3','llibre 4','llibre 5'])
console.log(exSet)
// 5. Añade dos más. Uno de ellos repetido

exSet.add("llibre 6")
exSet.add("llibre 5")

console.log(exSet)
// 6. Elimina uno concreto a tu elección

exSet.delete('llibre 1')
console.log(exSet)
// 7. Crea un mapa que asocie el número del mes a su nombre
let exMap=new Map([
    [1,"gener"],
    [2,"febrer"],
    [3,"març"],
])
console.log(exMap)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
exMap.has(2)?console.log(exMap.get(2)):console.log("no existeix")
// 9. Añade al mapa una clave con un array que almacene los meses de verano
exMap.set("estiu",['Juny','juliol','agost'])
console.log(exMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
exArray.push('burro')
console.log(typeof exArray)
console.log(Object.prototype.toString.call(exArray)); 
console.log(exArray.length)
console.log(exArray)
let exSet2 = new Set(exArray)
console.log(exSet2)
console.log(typeof exSet2)
console.log(Object.prototype.toString.call(exSet2)); 
let exMap2 = new Map([...exSet2].map((valor, index) => [index,valor]))
console.log(exMap2)
console.log(typeof exMap2)
console.log(Object.prototype.toString.call(exMap2)); 