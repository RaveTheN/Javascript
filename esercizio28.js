//Perform a code refactoring by using the Spread Operator. The output of the console.log must be the same.

// function sum(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));