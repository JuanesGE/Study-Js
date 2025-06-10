let afuera = 'estoy fuera';
export function alcance(){
    function saludo(){}
        afuera = 'estoy dentro';
        var viejaforma = 'no usar esta forma';
        let variable = 'hola';
        const constante = 'hola mundo';
        console.log(saludo);
        console.log(viejaforma);
        console.log(variable);
        console.log(constante);
    }
console.log(afuera);
alcance();
console.log(afuera);
