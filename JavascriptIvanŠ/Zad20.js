const prompt = require('prompt-sync')();
let celzijus = parseFloat(prompt("Unesi temperaturu u °C: "));
let fahrenheit = celzijus * 9/5 + 32;
console.log(`Temperatura u Fahrenheitima: ${fahrenheit.toFixed(2)}°F`);
