let arr1 = [2,1];
let arr2 = [6,5];

// con los ... puedo agregarle elementos al array al inicio o al final,
// tambien otro array dentro
export let arr3 = [20,...arr1, 6, 7, ...arr2, 9, 7];

//.pop() elimino el ultimo elemento del array
arr3.pop();
// console.log(arr3);

