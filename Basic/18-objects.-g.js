let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

// Acceso a propiedades

// Notación punto
//console.log(person.name)

// Notación de corchetes
//console.log(person["name"])

// Modificación de propiedades

person.name = "Brais Moure"
//console.log(person.name)

//console.log(typeof person.age)
person.age = "37"
//console.log(person.age)
//console.log(typeof person.age)

// Eliminación de propiedades

delete person.age

//console.log(person)

// Nueva propiedad

person.email = "braismoure@mouredev.com"
person["age"] = 37

//console.log(person)

// Métodos (funciones)

let person2 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        //console.log("La persona camina.")
    }
}
person2.walk()

// Anidación de objetos

let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function () {
        //console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            //console.log(`La persona de ${this.exp} años de experiencia trabaja.`)
        }
    }
}

//console.log(person3)

let person4= {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let person5 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

//console.log(person5.name ==person4.name)

for (let valor in person4) {
    //console.log(valor + ":"+person4[valor])
}


//console.log(person3.job.work())

//funcions com objectes

function Person(name, age){
    this.name=name
    this.age=age
}

let persona5= new Person("gubi", 40)
console.log(persona5.name)


