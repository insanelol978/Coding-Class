// Goal: Write a program containing two functions to calculate the circumference and area of a circle
// defined by its radius. Test it using user input
// console.log(2 ** 3); 
// console.log(3 ** 2); 
let cl = console.log

// formula is 2rpi

let circ = function(r) {
    return Math.PI * 2 * r;
};

cl(circ(3));