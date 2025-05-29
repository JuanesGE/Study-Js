export const usuarios = [
    {id: 1, name: 'juanes'},
    {id: 2, name: 'garcia'},
    {id: 1, name: 'espinosa'},
];

//const resulatdo = usuarios.indexOf({id: 2, name: 'garcia'});

// .fin devuelve el PRIMER ELEMENTO que encuentre que cumpla con el return
/* const resultado = usuarios.find(function(usuario) {
    return usuario.id === 1;
}); */

//Fat arrow function
/* const resultado = usuarios.find(usuario =>
    usuario.name === 'garcia');
console.log(resultado); */

//Devuelve el id donde se encuentra el elemento
const resultado = usuarios.findIndex(usuario =>
    usuario.name === 'garcia');
//console.log(resultado);
