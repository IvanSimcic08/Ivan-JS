const prompt = require('prompt-sync')();
let a = parseFloat(prompt("Unesi prvi broj: "));
let b = parseFloat(prompt("Unesi drugi broj: "));
let c = parseFloat(prompt("Unesi treći broj: "));

console.log("Najveći broj je:", Math.max(a, b, c));
