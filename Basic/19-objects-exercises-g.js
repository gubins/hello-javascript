/*
Clase 5 en vídeo | 07/08/2024
Objetos, desestructuración, propagación y clases
https://www.youtube.com/live/SBXEpAx_y_Q?si=Sbqqa2-_eGwsUkH-&t=958
*/

// 1. Crea un objeto con 3 propiedades

let taula={
    alçada:60,
    amplada:80,
    allargada:50
}

// 2. Accede y muestra su valor
console.log(taula)
console.log(taula.alçada)

// 3. Agrega una nueva propiedad
taula.color="blanc"
console.log(taula)


// 4. Elimina una de las 3 primeras propiedades
delete taula.alçada
console.log(taula)

// 5. Agrega una función e invócala
taula.compra=function(){console.log("comprada a Ikea")}
console.log(taula)
taula.compra()


// 6. Itera las propiedades del objeto
for (const key in taula) {
    console.log(`${key}`+`: `+`${taula[key]}`)    
}

// 7. Crea un objeto anidado

taula.material={plastic:true,fusta:true}
console.log(taula)
for (const key in taula) {
    console.log(`${key}`+`: `+`${taula[key]}`)    
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log(taula.material.fusta)
taula.material2={plastic:true,fusta:true}

// 9. Comprueba si los dos objetos creados son iguales
console.log(taula.material==taula.material2)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(taula.material.fusta==taula.material2.fusta)