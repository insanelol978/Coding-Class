// Goal: Write a program that asks the user for a raw price. After that, it calculates the corresponding
// final price using a VAT rate of 20.6%.

let raw = 50
let vat = .206
let reduce = raw * vat
console.log(raw - reduce);
