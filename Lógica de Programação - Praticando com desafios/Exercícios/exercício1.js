/* Crie um programa que verifica se uma
palavra ou frase é um palindromo */

function verificarPalindromo(str){
    // Converte a string para minúscula e remove caracteres não alfanuméricos
    const stringLimpa = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Inverte a string limpa
    const stringInvertida = stringLimpa.split('').reverse().join('');

    // Compara a string limpa com a invertida
    return stringLimpa === stringInvertida;
}

//Exemplos de uso
console.log(verificarPalindromo("reviver"));
console.log(verificarPalindromo("luz azul"));
console.log(verificarPalindromo("manhã"));
console.log(verificarPalindromo("A man, a plan, a canal: Panama"))