function calcula(a, b, operacao) {
    switch (operacao) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "Erro: divisão por zero!";
            }
            return a / b;
        default:
            return "Operação inválida!";
    }
}

// Exemplos de uso:
console.log(calcula(20, 5, "+")); 
console.log(calcula(20, 5, "-")); 
console.log(calcula(20, 5, "*")); 
console.log(calcula(20, 5, "/")); 
console.log(calcula(20, 0, "/")); 
