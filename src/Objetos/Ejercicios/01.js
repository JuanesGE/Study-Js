export function Usuarios(name){
    this.name = name;
    this.id = Math.random();
}

const user = new Usuarios('Felipe');
const user2 = new Usuarios('David');
//console.log(user, user2);