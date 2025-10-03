const prompt = require('prompt-sync')();
let broj = parseInt(prompt("Unesi broj: "));

for (let i = broj; i >= 0; i--) {
    console.log(i);
}
