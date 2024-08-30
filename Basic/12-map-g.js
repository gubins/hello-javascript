//map
//col·lecció d'elelments
// funciona per parells= clau:valor
let myMap= new Map()

myMap= new Map([
    ["nom","Antoni"],
    ["correu","bustia@correu.cat"],
    ["edat", 51]

])

myMap.set("segon","Segon")
myMap.set("segon","Teregon")

console.log(myMap.has("correu"))
console.log(typeof myMap)
console.log(myMap)
myMap.delete("segon")
console.log(myMap)
console.log(myMap.keys())
//myMap.clear()
console.log(myMap)
console.log(myMap.entries())


