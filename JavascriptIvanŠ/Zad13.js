const prompt = require('prompt-sync')();
let ocjene = [];

for (let i = 0; i < 3; i++) {
    ocjene.push(parseFloat(prompt(`Unesi ocjenu ${i + 1}: `)));
}

let prosjek = (ocjene[0] + ocjene[1] + ocjene[2]) / 3;
console.log("Prosjek je:", prosjek.toFixed(2));
