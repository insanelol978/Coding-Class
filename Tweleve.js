// Goal: Complete the following program so that it offers the four basic arithmetical operations: addition,
// subtraction, multiplication and division. You can use either a function declaration or a function
// expression.
// // TODO: complete program
// console.log(calculate(4, "+", 6)); // Must show 10
// console.log(calculate(4, "-", 6)); // Must show -2
// console.log(calculate(2, "*", 0)); // Must show 0
// console.log(calculate(12, "/", 0)); // Must show Infinity

let cl = console.log

let add = function(num1, num2) {
        return num1 + num2;
};

cl(add(4, 6));


let subtract = function(num1, num2) {
        return num1 - num2;
}

cl(subtract(4, 6));


let multiply = function(num1, num2) {
        return num1 * num2;
}

cl(multiply(2, 0));


let division = function(num1, num2) {
        return num1 / num2
}

cl(division(12, 0));