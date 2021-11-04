let cl = console.log;

// cl("Hello World");


// console.log("Hello World!")

// let name = "Joshua";

// console.log(name + " Barrus");

// console.log(1 + 2 + "A");

// console.log(

//     2 + 2

// );

// console.log(

//     8 / 2

// );

// console.log(

//     99 === "99"

// );

// console.log(

//     9 % 5

// );

// console.log(

//     "A " + "B"

// );

// cl( "Hello" + " World!");

// cl("843-452-1574");

// cl(843-452-1574);

// let y = 1;

// y = 2
// {
// let y = 3;
// }
// console.log(y);

// if (2 > 1) {
//  cl("I'm such a smart computer")

// }

// if (false) {
//     throw "This can never happen";
   
//    }

// for (let count = 1; count > 5; count++) {
//     cl(count);
// }

// let hashtag = "#";

// for (let index = 0; index < 8; index++) {
//         cl(hashtag)
//         hashtag += "#"
// }
// cl("#");

// let name = "Joshua Barrus";

// for (let index = 0; index < name.length; index++) {
//         cl(name[index]);
        
// }

for (let i = 0; i < 101; i++) {
        
        if (i % 15 === 0) {
                cl("FizzBuzz");
        }
      else if (i % 5 === 0) {
                cl("Buzz");
        }
      else if (i % 3 === 0) {
                cl("Fizz");
        }
        else {
                cl(i);
        };
}