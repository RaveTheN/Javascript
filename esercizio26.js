//The sum function has a high numbers of parameters. How can we improve the code in order to make it accept an unknown numbers to sum?

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

function sum(...list) {
    return list.reduce((a,b) => a+b);
}


console.log(sum(1, 2, 3, 4, 5));