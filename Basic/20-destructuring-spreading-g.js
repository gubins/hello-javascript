//destructuracio
let myArray = [1, 2, 3, 4]

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let [miValor0, mivalor1,,miValor3,miValor4=0]=myArray

console.log(miValor0)
console.log(mivalor1)
console.log(miValor3)
console.log(miValor4)

let {age, name2, alias}= person
console.log(name2)
console.log(alias)
console.log(age)

/*
let {name, age, alias}= person
console.log(name)
console.log(alias)
console.log(age)
*/
let {name: name22, age: age2, alias: alias2, email="prova"}= person
console.log(name22)
console.log(alias2)
console.log(age2)
console.log(email)

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona de ${this.age} años de experiencia trabaja.`)
        }
    }
}

let {name:name4, job: {name: jobname}, job:{exp:jobexp}}=person3
console.log(jobname) 
console.log(name4)
console.log(jobexp)

//propagacion ...

let myArray2=[...myArray]
console.log(myArray2)

let myArray3=[...myArray,5,6]
console.log(myArray3)

//combinaciño

let myArray4=[...myArray,...myArray2,...myArray3]
console.log(myArray4)

let person4={...person,email: "prova@"}
console.log(person4)

