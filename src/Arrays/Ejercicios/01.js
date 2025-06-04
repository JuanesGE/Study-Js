export function paraAbsoluto(arr){
    return arr.map(numeros => Math.abs(numeros));
}

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

//console.log(absolutos);