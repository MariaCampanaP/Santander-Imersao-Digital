/* Crie uma função que receba dois números como parâmetros
e retorna o maior deles */

function maiorNumero(numero1, numero2){
    return numero1 > numero2 ? numero1 : numero2;
}

let numeros = maiorNumero(4, 5);
console.log(numeros);