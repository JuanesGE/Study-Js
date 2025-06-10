export const usuarios = [
    {edad: 17, nombre: 'Nico', plan: 'premium'},
    {edad: 56, nombre: 'Samuel', plan: 'free'},
    {edad: 33, nombre: 'Esteban', plan: 'free'},
    {edad: 25, nombre: 'Pablo', plan: 'gold'},
];

function groupBy(arr, prop){
    return arr.reduce((acc, el) => {
        let valorProp = el[prop];

        acc[valorProp] = acc[valorProp] ? acc[valorProp] : [];
        acc[valorProp].push(el);
        return acc;
    }, {});
        
}

const grouped = groupBy(usuarios, 'plan');
//console.log({grouped});