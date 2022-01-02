// Goal: Write a program that plays “neither yes, nor no” with the user. Specifically, the programs asks
// the user to enter text until either “yes” or “no” is typed, which ends the game.

let answer = "yes"
if (answer === "yes") { 
    console.log("The game is over.");
}
else if (answer === "no") {
    console.log("The game is over.");
} 
else if (answer != "yes" || answer != "no") {
    console.log("Try again");
}
