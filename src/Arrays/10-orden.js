// export let numeros = [23,12,-9];

// numeros.sort();
// numeros.reverse();
// console.log(numeros);

/* export let letras = ['a','b','c'];
letras.sort();
letras.reverse();
// console.log(letras); */

// export let conMayusculas = ['a','b','C'];
// //En este caso se hace con la fat arrow function para que funcione corractamente.
// conMayusculas.sort((a,b) => {
//     //a antes que b => -1
//     //b antes que a => 11
//     //si son iguales => 0
//     let aLower = a.toLowerCase();
//     let bLower = b.toLowerCase();

//     if (aLower < bLower) {
//         return -1;
//     }
// //No se poner el else ya que el ruturn corta la ejecucion del codigo cuando se cumpla
//     if (aLower > bLower) {
//         return 1;
//     }
//         return 0;
// });
// console.log(conMayusculas);

export let usuarios = [
    {edad: 34, nombre: 'Santiao'},
    {edad: 12, nombre: 'Odin'},
    {edad: 27, nombre: 'Casakistan'},
];

//Menor a mayor edad
usuarios.sort((a,b) => {
    if(a.edad < b.edad) {
        return -1;
    }
    if(a.edad > b.edad){
        return 1;
    }
    return 0;
});

//Si el if es de una sola linea puedo trabajarlo asi tambien =
        usuarios.sort((a,b) => {
            if(a.edad < b.edad) return -1;
            if(a.edad > b.edad) return 1;
                return 0;
            });

//console.log(usuarios);

