/* Crie um programa com uma função que receba três números como argumento e os retorne em ordem crescente.
Exiba os números ordenados */

function ordenarNumeros(a, b, c){
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}

ordenarNumeros(3, 1, 5);