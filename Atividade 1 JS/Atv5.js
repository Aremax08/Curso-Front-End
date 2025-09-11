function converterTemp(temp) {
    if (temp.escala === "C") {
        let convertido = temp.valor * 1.8 + 32;
        return { valor: convertido, escala: "F" };
    } else if (temp.escala === "F") {
        let convertido = (temp.valor - 32) / 1.8;
        return { valor: convertido, escala: "C" };
    } else {
        return "Escala inválida! Use 'C' ou 'F'.";
    }
}

let t1 = { valor: 25, escala: "C" };
let t2 = { valor: 77, escala: "F" };

console.log(converterTemp(t1));
console.log(converterTemp(t2));
