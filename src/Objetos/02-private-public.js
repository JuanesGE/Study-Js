export function Usuario() {
    const id = 1;
    this.name = 'Juanes';

    const log = function(){
        console.log('Logging...');
    }

    this.guardar = function(){
        log()
        console.log('Saving...');
    }
}

export const usuario = new Usuario();
//usuario.guardar();