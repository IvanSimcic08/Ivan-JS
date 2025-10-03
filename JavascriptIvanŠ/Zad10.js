const prompt = require('prompt-sync')();
let slucajni = Math.floor(Math.random() * 10) + 1;
let pokusaj = parseInt(prompt("Pogodi broj (1-10): "));

if (pokusaj === slucajni) {
    console.log("Bravo!");
} else {
    console.log("Pokušaj ponovo! Broj je bio:", slucajni);
}
