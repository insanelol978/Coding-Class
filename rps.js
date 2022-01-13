let cl = console.log

let getrps = function() {
    let rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)];
};

let user = function() {
    let user = process.argv[2];
    return user || getrps();
};

let winner = function(userInput, computerInput) {
    if(userInput === computerInput) {
        return "tie";
    }
    if (userInput === "rock" && computerInput === "scissors" ||
    userInput === "scissors" && computerInput === "paper" ||
    userInput === "paper" && computerInput === "rock"
    ) {
    return "Win";
    } else {
        return "Lose";
    }
};

let congratulate = function(result) {
    if (result === "tie") {
        cl("Nobody's a winner.");
    } else if (result === "Win") {
        cl("You win!");
    } else {
        cl("Sorry, you lost becuase your bad.");
    }
};

let userInput = user();
let computerInput = getrps();
cl("You picked", userInput);
cl("Computer picked", computerInput);
let result = winner(userInput, computerInput);
congratulate(result);