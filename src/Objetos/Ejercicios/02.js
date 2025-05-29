export function createUsuario(name){
    return{
        id: Math.random(),
        name,
    }
}

const user = createUsuario('Felipe');
const user2 = createUsuario('David');
//console.log(user, user2);