// Goal: Final values
// Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
// Check your prediction by executing it

// My Prediction is: 1, 10, 101, 20, 20, 10, 10

// let a = 2
// a += 1
// console.log(a);