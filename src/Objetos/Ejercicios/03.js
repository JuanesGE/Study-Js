export function similares(obj1, obj2){
    const distintos = false;
    for( const llave in obj1){
        if(obj1[llave] !== obj2[llave]){
            distintos = true;
        }
    }
    return !distintos;
}

const resultado = similares(
    {id:1, name: 'Juan'},
    {id:1, name: 'Juan'},
);

console.log(resultado);