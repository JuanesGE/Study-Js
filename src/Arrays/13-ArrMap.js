export let Usuarios = [
    {edad:10, nombre:'Carlos'},
    {edad:16, nombre:'Diego'},
    {edad:30, nombre:'Emma'},
    {edad:25, nombre:'Susi'},
];

/* //Vamos a generar una lista que contenga los nombres de los usuarios =
const lista = Usuarios.map(Usuarios => Usuarios.nombre);
 //console.log(lista);

 //HTML
const html = Usuarios.map(Usuarios => `<li>${Usuarios.nombre}</li>`);
console.log(html);

//HTML ordenado -> Order List
const html2 = `<ol>${html.join('')}</ol>`
console.log(html2); */

//Si el usuario es mayor de edad true or false si es menor de edad =
const mapeado = Usuarios.map(Usuarios => {
    return {
        ...Usuarios,
        mayor:Usuarios.edad > 17,
    }
});
//console.log(mapeado);