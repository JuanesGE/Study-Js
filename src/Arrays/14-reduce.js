/* export const numeros = [1,2,3,4];

//1+2 = 3 \ 3+3 = 6 \ 6+4=10
const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log(suma); */

/* const anidado = [[1, 2], 3,[4, 5]];
//1,2,3,4,5
export const plano = anidado.reduce((acc, el) => acc.concat(el), []);
console.log(plano) */;

export const Usuarios = [
    {edad:10, nombre:'Carlos'},
    {edad:16, nombre:'Diego'},
    {edad:30, nombre:'Emma'},
    {edad:25, nombre:'Susi'},
];

const agregados = Usuarios.reduce((acc, el) => ({
    ...acc,
    [el.nombre]: el,
}), {});

//console.log(agregados);
//Aplicar esto me sirve para busacr elemntos dentro de un array que sean demasiado grandes(1.000, 10.000, etc).