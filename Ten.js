// Goal: Write a program that shows all numbers between 1 and 100 with the following exceptions:
// • It shows "Fizz" instead if the number is divisible by 3.
// • It shows "Buzz" instead if the number is divisible by 5 and not by 3.
// When it’s done, improve it so that the program shows "FizzBuzz" instead for numbers divisible
// both by 3 and by 5.

// Comment: Idk if this is cheating bc we already did this but here it is again!
let cl = console.log

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