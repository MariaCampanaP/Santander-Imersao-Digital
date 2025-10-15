/* Crie um sistema para o Detran - Verifique se a pessoa é maior
de idade ou não, se for mostre um alerta informando 'Pode tirar a 
habilitação', caso contrário mostre 'Não pode tirar a habilitação'*/

alert('Boas vindas ao verificador de idade!');

let idade = prompt('Digite sua idade:');

if(idade >= 18){
    alert('Pode tirar a habilitação');
}else{
    alert('Não pode tirar a habilitação');
}