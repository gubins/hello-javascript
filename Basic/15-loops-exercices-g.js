/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for(let i=1;i<=20;i++){
    //console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let resultat=0
for(let i=1;i<=100;i++){
    resultat += i
    //console.log(resultat)
}
//console.log(resultat)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i=1;i<=50;i++){
    if (i%2==0){
    //console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let exArray=['gos','gat','porc','conill','gallina']

for (let i of exArray) {
    //console.log(i)
    
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let text='supercalifragilisticoespialidoso'
let llarg=0
for (let i of text) {
    llarg ++
}
//console.log(llarg)
//console.log(text.length)


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let exArray2=[1,2,3,4,5,6,7];let x=1;for (let i of exArray2) {x*=i};//console.log(x);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for(let i=0;i<=10;i++){/*console.log(`5 x ${i} = `+5*i)*/}

// 8. Usa un bucle para invertir una cadena de texto
let text2='supercalifragilisticoespialidoso'
let text3=''
for(let i=text2.length-1;i>=0;i--){
    //console.log(text2[i])
    text3+=text2[i]
    //console.log(text3)
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let fibo=[0,1]
let i=2
//0,1,1,2,3,5,8
do{
    fibo.push(fibo[i-2]+fibo[i-1])
    i++
} while(fibo.length<10)
console.log(fibo)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let fibo10=[]
for(i=0;i<=fibo.length-1;i++){
    if (fibo[i]<10){continue}
    fibo10.push(fibo[i])
}
console.log(fibo10)