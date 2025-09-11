function verificaIdade(pessoa) {
    if (pessoa.idade >= 18) {
        return `${pessoa.nome} é maior de idade.`;
    } else {
        return `${pessoa.nome} é menor de idade.`;
    }
}


let p1 = { 
nome: "João",
idade: 18 
}
let p2 = {
nome: "Ana",
idade: 17
};

console.log(verificaIdade(p1)); 
console.log(verificaIdade(p2)); 
