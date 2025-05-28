export const punto = {
    x: 50,
    y: 35,
};

export const referencia = Object.assign(punto, {z: 10, x: 1});
export const clonePunto = Object.assign({}, punto, {z: 10, x: 1});
//console.log(punto, clonePunto)
//console.log(referencia)

export const copiaPunto = Object.assign({}, punto);
//console.log(copiaPunto)

export const copiaActual = {...punto};