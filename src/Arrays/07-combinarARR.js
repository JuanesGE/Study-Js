let val1 = [2,4];
let val2 = [1,3];

export const combinacion = val1.concat(val2);
// console.log(combinacion, val1, val2);

//Primer numero indica el indice: de donde empezamos a tomar elementos
//Segundo numero indica el final: de donde queremos terminar de tomar elementos
//Si se deja vacio simplemente hace una copia de array
let divididos = combinacion.slice()
// console.log(divididos);
