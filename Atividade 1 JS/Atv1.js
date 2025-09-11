let meunumero;
let resultados = [];
meunumero = 2;
for (let i = 0; i < 10; i++) {
    resultados.push(meunumero * (i + 1));
}
for (let i = 0; i < 10; i++) {
    console.log(`${meunumero} x ${i + 1} = ${resultados[i]}`);
}