/* Crie um programa de contagem progressiva. Peça um
número e conte de 0 até esse número, usando um loop
while no console do navegador */

let numero = prompt('Digite um número para a contagem progressiva');
let contagemProgressiva = 0

while (contagemProgressiva <= numero){
    alert(`Contagem Progressiva ${contagemProgressiva}`);
    contagemProgressiva++;
}
