// Goal: Improve our example RPG program to add an experience property named xp to the character. Its
// initial value is 0. Experience must appear in character description. 

let cl = console.log

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    exp: 0 
};
 
aurora.health -= 20
aurora.strength += 10
aurora.exp += 15

cl("Aurora has " + aurora.health + " health points, " + aurora.strength + " as strength and " + aurora.exp + " XP points");