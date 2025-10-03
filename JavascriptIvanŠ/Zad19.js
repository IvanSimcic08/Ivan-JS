const prompt = require('prompt-sync')();
let godine = parseInt(prompt("Unesi svoje godine: "));

if (godine >= 18) {
    console.log("Možeš glasati");
} else {
    console.log("Ne možeš glasati");
}
