export const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 56, nombre: 'Samuel', plan: 'free'},
    {edad: 10, nombre: 'Esteban', plan: 'premium'},
    {edad: 25, nombre: 'Pablo', plan: 'gold'},
];

function obtenerMayor(arr){
    let mayor = arr[0];
    for(let usuario of arr){
        if(mayor.edad < usuario.edad){
            mayor = usuario;
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
//console.log(mayor);