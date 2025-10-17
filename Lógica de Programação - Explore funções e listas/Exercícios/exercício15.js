/* Crie uma função que mostre na tela a área e o perímetro de uma 
sala retangular, utilizando altura e largura que serão dadas
como parâmetro */

function calcularAreaPerimetroSalaRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
}

let altura = 3;
let largura = 5;
calcularAreaPerimetroSalaRetangular(altura, largura);