function brojSamoglasnika(str) {
    let samoglasnici = "aeiouAEIOU";
    let broj = 0;
    for (let slovo of str) {
        if (samoglasnici.includes(slovo)) {
            broj++;
        }
    }
    return broj;
}

console.log(brojSamoglasnika("Programiranje"));
