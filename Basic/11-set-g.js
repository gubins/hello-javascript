//set
let mySet=new Set(['primer','segon','tercer','quart'])
console.log(mySet)



//add delete
mySet.add("Cinque")
mySet.add("Sisé")

console.log(mySet.delete("Sisé"))

console.log(typeof mySet)


console.log(mySet.has("segon"))
console.log(mySet.size)
let myArray=Array.from(mySet)
console.log(myArray)

let mySet2=new Set(myArray)
console.log(mySet2)
mySet2.add("primer")
console.log(mySet2)