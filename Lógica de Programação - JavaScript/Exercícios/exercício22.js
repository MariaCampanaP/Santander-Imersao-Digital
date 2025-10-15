/* Crie uma variável "número" e peça um valor com prompt
verifique se é positivo, negativo ou zero. Use if-else para
imprimir a respectiva mensagem */

let numero = prompt('Digite um valor');

if(numero >= 1){
    console.log('O número é positivo');
}else if (numero < 0){
    console.log('O numero é negativo');
}else{
    console.log('O número é zero');
}