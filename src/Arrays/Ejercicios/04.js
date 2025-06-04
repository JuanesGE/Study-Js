export const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 56, nombre: 'Samuel', plan: 'free'},
    {edad: 10, nombre: 'Esteban', plan: 'premium'},
    {edad: 25, nombre: 'Pablo', plan: 'gold'},
];

function cuantosPremium(users){
    //return users.filter(usuario => usuario.plan === 'premium');


    //OTRA FORMA
/*     return users.reduce((acc, el) => {
        if(el.plan !== 'free'){
            return acc + 1;
        }
        return acc;
    }, 0);
} */


    //MANERA SIMPLE
    return users.reduce((acc, el) =>
        el.plan !== 'free' ? acc + 1: acc, 0);
}



function cuantosMayores(users){
    //return users.filter(u => u.edad > 18 );


    //OTRA FORMA
/*     return users.reduce((acc, el) => {
        if(el.edad >= 18){
            return acc + 1;
        }
        return acc;
    }, 0);
} */
    

    //MANERA SIMPLE
    return users.reduce((acc, el) =>
        el.edad > 18 ? acc + 1: acc, 0);
}
console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));