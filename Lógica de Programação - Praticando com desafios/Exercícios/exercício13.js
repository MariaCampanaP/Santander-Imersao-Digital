/* Crie uma função que valide se um número
é positivo, negativo ou zero. */

function validarNumero(numero) {
    if(numero > 0){
        return "Positivo";
    } else if (numero < 0){
        return "Negativo";
    } else {
        return "Zero";
    }
}

console.log(validarNumero(-1));