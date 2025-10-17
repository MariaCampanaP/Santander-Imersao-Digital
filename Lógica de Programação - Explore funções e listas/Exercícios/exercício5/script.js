/* Ao clicar no botão soma, peça 2 números e exiba o resultado 
da soma em um alerta */

function somandoDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}