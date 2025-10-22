/* Implemente uma função que receba um array e um elemento, e
retorne se o elemento está presente no array. */

function verificarElementoNoArray(arr, elemento){
    return arr.includes(elemento);
}

const meuArray = [10, 20, 30, 40, 50];
const elementoProcurado = 30;

const elementoEstaPresente = verificarElementoNoArray(meuArray, elementoProcurado);

if(elementoEstaPresente){
    console.log(`O elemento ${elementoProcurado} está presente no array`);
}else{
    console.log(`O elemento ${elementoProcurado} não está presente no array`);
}