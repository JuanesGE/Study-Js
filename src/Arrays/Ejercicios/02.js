const myArray = [
    'Hola',
    12,
    'Mundo',
    {},
    {id:15},
    ['lala'],
];

export function dividePorTipo(arr){
    return {
        numeros: arr.filter(n => typeof n === 'number'),
        strings: arr.filter(n => typeof n === 'strings'),
        objetos: arr.filter(n => typeof n === 'object'),
    };
};
//typeof = Determinar el tipo de dato de una variable o expresión.
const nuevoArray = dividePorTipo(myArray);
//console.log(nuevoArray);