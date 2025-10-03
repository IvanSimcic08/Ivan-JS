const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Unesi prvi broj: "));
let b = parseFloat(prompt("Unesi drugi broj: "));

if (a > b) {
    console.log(`Veći broj je: ${a}`);
    console.log(`Manji broj je: ${b}`);
} else if (b > a) {
    console.log(`Veći broj je: ${b}`);
    console.log(`Manji broj je: ${a}`);
} else {
    console.log("Brojevi su jednaki.");
}
