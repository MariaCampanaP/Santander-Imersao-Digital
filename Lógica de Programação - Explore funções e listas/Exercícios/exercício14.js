/* Crie uma função que converta um valor em dólar, passado como
parâmetro, e retorna o valor equivalente em reais. Para isso, 
considere a cotação do dólar igual a R$4,80 */

function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
}

let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} doláres equivalem a R$ ${valorEmReais}`);
