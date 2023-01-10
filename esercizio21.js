//Use the destructuring, instead of a temporary variable, to swap the values of the variables.

let arr = [10, 20]

let [i, j] = arr;

let num1 = i;
let num2 = j;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
//let temp = num2;
num2 = i;
num1 = j;

console.log('After swap: ', num1, num2); // After swap: 20 10