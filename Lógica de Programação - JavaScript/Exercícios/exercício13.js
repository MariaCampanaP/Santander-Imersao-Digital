/* Crie um programa de contagem regressiva. Peça um 
número e conte deste número até 0, usando um loop while
no console do navegador */

let numero = prompt('Digite um número para a contagem regressiva');

while(numero >= 0){
    alert(`Contagem Regressiva ${numero}`);
    numero--;
}