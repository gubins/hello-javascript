//loop bucles
//for

let myArray=[]
for(let i=0;i<5;i++){
  console.log(i)
}

const numbers =[7,8,9,0,1,2,3,4,5]

for(let i=0;i<numbers.length;i++){
    console.log(`${numbers[i]}`)
  }

//while
let i=0;
while (i<numbers.length){
    console.log(`while ${numbers[i]}`)
    i++
}

console.log(i)
i=0;
//do while
do{
    console.log(`do while ${numbers[i]}`)
    i++
} while(i<5)

//for of
for (let number of numbers) {
    console.log(`forof ${number}`)
}

let myString="Hola mon"
for (let number of myString) {
    console.log(`forof ${number}`)
}



for(let i=0;i<numbers.length;i++){
    if (numbers[i] <4 ){
        console.log("continuo")
        continue
    }
    if (numbers[i] == 4 ){
        console.log("trenco")
        break
    }
    console.log(`${numbers[i]}`)
  }