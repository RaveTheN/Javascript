//Do you know how to "merge" the value of the newNumber variable into numberStore without using the array method push?

let newNumber = [3];
let numberStore = [0, 1, 2, ...newNumber];

//numberStore.push(newNumber);
console.log(numberStore);