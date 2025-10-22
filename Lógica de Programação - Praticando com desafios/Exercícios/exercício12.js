/* Adicione os números 1, 2, 3 em uma variável chamada
minhaLista e armazene os números 4, 5 e 6 separadamente em 
outra variável. Use o método concat() para combinar as 
sequências de valores em uma nova lista chamada novaLista.
Imprima novaLista no console */

let minhaLista = [];

minhaLista.push(1, 2, 3);
console.log("Adicionando elementos:", minhaLista);

let outrosNumero = [4, 5, 6];

let novaLista = minhaLista.concat(outrosNumero);
console.log("Juntando Arrays:", novaLista);

/* Remova o último elemento de novaLista. Imprima novaLista 
após a remoção */

//Removendo o último elemento
novaLista.pop();
console.log("Desafio 4:", novaLista);

/* Utilize o algoritmo de Fisher-Yates (também conhecido como
Knuth Shuffle) para embaralhar os elementos em novaLista. 
Pesquise e adpate o código para realizar o embaralhamento. */

//Embaralhando novaLista
function embaralharArray(array) {
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

novaLista = embaralharArray(novaLista);
console.log("Embaralhando a Lista:", novaLista);

/* Crie uma função chamada removerDuplicatas que aceita um
array como parâmetro e retorna um novo array sem elementos
duplicados. Teste a função com novaLista e imprima o array resultante. */

function removerDuplicatas(array) {
    return [...new Set(array)];
}

let novaListaSemDuplicatas = removerDuplicatas(novaLista);
console.log("Remover duplicatas:", novaListaSemDuplicatas);