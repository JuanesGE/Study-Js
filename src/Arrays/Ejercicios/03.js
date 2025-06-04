export const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 56, nombre: 'Samuel', plan: 'free'},
    {edad: 33, nombre: 'Esteban', plan: 'free'},
    {edad: 25, nombre: 'Pablo', plan: 'gold'},
];

function getPaidUsers(users) {
    return users.filter(usuario => usuario.plan !== 'free' );
}

console.log(getPaidUsers(usuarios));