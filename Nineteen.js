// Goal: Write a program that asks you for a word then shows its length, lowercase, and uppercase values.
let cl = console.log

let word = "Earth"

cl(word.length);
// cl(word.indexOf("E"));
// cl(word.indexOf("arth"));

let part = word.split("E");
// cl(word[0]);
// cl(word[1]);
// cl(word[2]);
// cl(word[3]);
// cl(word[4]);

cl(word[0].length);
cl(word[1].length + word[2].length + word[3].length + word[4].length);
