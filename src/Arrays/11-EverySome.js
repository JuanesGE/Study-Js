export let Usuarios = [
    {id: 1, activo:true},
    {id: 2, activo:false},
    {id: 3, activo:false},
];

//Every, se detiene  cuando detecta uno en flase o innactivo.
//Some, se ejecuta hasta que encuentre por lo menos un valor de true.
let estanActivos = Usuarios.some(a => {
    //console.log('Activos - Id:',a.id);
    return a.activo;
})

//console.log(estanActivos);

