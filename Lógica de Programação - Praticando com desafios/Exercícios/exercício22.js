/* Desenvolva uma função que receba um array de objetos
representando estudantes de um curso e um objeto que
representa um estudante procurado. Depois retorne se o objeto
está presente no array. */

function verificarObjetoNoArray(arr, objeto){
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

const alunos = [
    { id: 1, nome: 'João', idade: 20 },
    { id: 2, nome: 'Maria', idade: 22 },
    { id: 3, nome: 'Pedro', idade:21 },
    { id: 4, nome: 'Ana', idade: 19 }
];

const alunoProcurado = { id: 2, nome: 'Maria', idade: 22 };

const objetoEstaPresente = verificarObjetoNoArray(alunos, alunoProcurado);

if(objetoEstaPresente) {
    console.log('O aluno está presente no arrya');
}else{
    console.log('O aluno não está presente no array');
}