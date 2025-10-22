/* Implemente uma função que verifique se
uma pessoa é maior de idade */

function verificarIdade(idade){
    return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log(verificarIdade(18));