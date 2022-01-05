// Goal: Write a program that:
// • Creates an array named musketeers containing values “Athos”, “Porthos” and “Aramis”.
// • Shows each array element using a for loop.
// • Adds the “D’Artagnan” value to the array.
// • Shows each array element using the forEach() method.
// • Remove poor Aramis.
// • Shows each array element using a for-of loop.

let cl = console.log
let musketeers = ["Athos", "Porthos", "Aramis"];
for (let index = 0; index < 1; index++) {
    cl(musketeers);
}
musketeers.push("D'Artagnan");

musketeers.forEach(character => {
    console.log(character);
});
musketeers.pop("D'Artagnan");
for (const character of musketeers) {
    console.log(character);
    }    