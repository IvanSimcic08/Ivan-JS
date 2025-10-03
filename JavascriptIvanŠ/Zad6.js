const prompt = require('prompt-sync')();
let niz = [];

for (let i = 0; i < 3; i++) {
    let broj = parseFloat(prompt(`Unesi broj ${i + 1}: `));
    niz.push(broj);
}

let zbroj = niz[0] + niz[1] + niz[2];
console.log("Zbroj je:", zbroj);
