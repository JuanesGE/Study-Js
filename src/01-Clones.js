export const punto = {
    x: 50,
    y: 35,
};

export const clonePunto = Object.assign({}, punto, {z: 10});
console.log(punto, clonePunto)