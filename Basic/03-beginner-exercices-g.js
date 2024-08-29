/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Escribe un comentario en una línea
// comentari
// 2. Escribe un comentario en varias líneas
/*
varies linies
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let exString="text"
let exNumber=5.5
let exBoolean=false
let exUndefined
let exNull=null
let exSymbol=("exSymbol")
let bigint=4548758475083475783457083460576576324875n

// 4. Imprime por consola el valor de todas las variables
console.log(exString)//="text"
console.log(exNumber)//=5.5
console.log(exBoolean)//=false
console.log(exUndefined)
console.log(exNull)//=null
console.log(exSymbol)//=("exSymbol")
console.log(bigint)//=4548758475083475783457083460576576324875n

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof exString)//="text"
console.log(typeof exNumber)//=5.5
console.log(typeof exBoolean)//=false
console.log(typeof exUndefined)
console.log(typeof exNull)//=null
console.log(typeof exSymbol)//=("exSymbol")
console.log(typeof bigint)//=4548758475083475783457083460576576324875n

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

exString="text@"
exNumber=5
exBoolean=true
exSymbol=("exSymbol@")
bigint=45487584750834757834570834605765763248751n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
exString=1
exNumber="5.5"
exBoolean=33
exUndefined="definit"
exNull=3
exSymbol=5
bigint="hola"

console.log(exString)//="text"
console.log(exNumber)//=5.5
console.log(exBoolean)//=false
console.log(exUndefined)
console.log(exNull)//=null
console.log(exSymbol)//=("exSymbol")
console.log(bigint)//=4548758475083475783457083460576576324875n

console.log(typeof exString)//="text"
console.log(typeof exNumber)//=5.5
console.log(typeof exBoolean)//=false
console.log(typeof exUndefined)
console.log(typeof exNull)//=null
console.log(typeof exSymbol)//=("exSymbol")
console.log(typeof bigint)//=4548758475083475783457083460576576324875n


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const exStringConst="text"
const exNumberConst=5.5
const exBooleanConst=false
//const exUndefinedConst ja dona error, perquè s'ha d'inicialitzar
const exNullConst=null
const exSymbolConst=("exSymbol")
const bigIntConst=4548758475083475783457083460576576324875n

// 9. A continuación, modifica los valores de las constantes

// si intento modificar donarà error

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//serans les del punt 9