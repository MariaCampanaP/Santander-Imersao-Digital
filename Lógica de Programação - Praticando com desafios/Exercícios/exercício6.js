/* Receba, no mínimo, duas sentenças como uma string e utilize
split() para quebrá-la em frases menores com base em um
ponto e vírgula como delimitador. */

const duasSentenca = "Criar o que não existe ainda deve ser a pretensão de todo sujeito que está vivo; A tarefa mais importante de uma pessoa que vem ao mundo é criar algo";
const frasesSeparadas = duasSentencas.split(';');

console.log(frasesSeparadas);