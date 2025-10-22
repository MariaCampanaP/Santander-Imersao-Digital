/* Desenvolva uma função que valide se uma
string é vazia ou não */

function validarString(texto){
    return texto === "" ? "String vazia" : "String não vazia";
}

console.log(validarString("Aqui há um texto?"));
console.log(validarString(""));