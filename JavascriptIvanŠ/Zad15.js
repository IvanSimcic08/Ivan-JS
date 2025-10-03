function provjeriBroj(broj) {
    if (broj > 0) return "Pozitivan";
    if (broj < 0) return "Negativan";
    return "Nula";
}

console.log(provjeriBroj(5));
