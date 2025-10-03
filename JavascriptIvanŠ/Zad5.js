const prompt = require('prompt-sync')();
let broj = parseInt(prompt("Unesi broj: "));

if (broj % 2 === 0) {
    console.log("Broj je paran.");
} else {
    console.log("Broj je neparan.");
}
