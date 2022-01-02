// Goal: Let’s pretend the JavaScript Math.min() function doesn’t exist. Complete the following program
// so that the min() function returns the minimum of its two received numbers.
// // TODO: write the min() function
// console.log(min(4.5, 5)); // Must show 4.5
// console.log(min(19, 9)); // Must show 9
// console.log(min(1, 1)); // Must show 1

// let min1 = "4.5"
// let min2 = "5"
// if (min1 <= min2) {
//     console.log(4.5);
// }
// else if (min2 <= min1) {
//     console.log(5);
// }

// let min3 = "19"
// let min4 = "9"
// if (min3 <= min4) {
//     console.log(19);
// }
// else if (min4 <= min3) {
//     console.log(9);
// }

// let min5 = "1"
// let min6 = "1"
// if (min5 <= min6) {
//     console.log(1);
// }
// else if (min6 <= min5) {
//     console.log(1);
// }

let min = function(num1, num2) {
    if (num1 < num2) {
        console.log(num1);
    }
    else if (num2 < num1) {
        console.log(num2);
    }
};

min(4.5, 5);
min(19, 9);
min(1, 1);

// let min = function(num1, num2) {
//     if (num1 < num2) {
//         return num1
//     }
//     else if (num2 < num1) {
//         return num2
//     }
// }; 

// console.log(min(4.5, 5));