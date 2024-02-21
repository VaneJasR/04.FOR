
//Ejercicio 1

for(let i = 1; i<=50; i++){
 if (i % 2 == 0) {
 i++
 }
  console.log( i)
}

//Ejercicio 2 

let user =['pikachu', 'bulbasaur', 'charmander'];
let numero = parseInt(prompt("Ingrese un numero por favor: "));

if(numero % 5 == 0) {
    console.log(user);
} 



 //Ejercicio 3 
let numeros = [4,'dos',8,'tres',5,9,1,'cero'];

let filtrados = numeros.filter(numero =>  Number.isInteger(numero));

 console.log(filtrados);



 


