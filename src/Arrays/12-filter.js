export let Usuarios = [
    {edad:10, nombre:'Carlos'},
    {edad:16, nombre:'Diego'},
    {edad:30, nombre:'Emma'},
    {edad:25, nombre:'Susi'},
];

//Filtrar fat arrow function
const mayores = Usuarios.filter(Usuarios => Usuarios.edad > 17);
const menores = Usuarios.filter(Usuarios => Usuarios.edad < 17);
//console.log(mayores, menores);
