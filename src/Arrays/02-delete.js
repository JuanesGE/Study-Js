export const numeros = [1,2,3,4,5];

//Elemento final
const elemFInal = numeros.pop();
//console.log(elemFInal, numeros);

//Primer elemento
const elemInitial = numeros.shift();
//console.log(elemInitial, numeros);

//Eliminar intermedio
numeros.splice(2,1);
//console.log(numeros);