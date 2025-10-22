/* Crie uma função que converta a temperatura de Celsius para
Fahrenheit e vice-versa. Utilize uma variável para indicar a
escala desejada e um bloco condicional para determinar qual 
conversão utilizar */

function converterTemperatura(valor, escala){
    if(escala.toLowerCase() === 'celsius'){
        return (valor * 9 / 5) +  32;
    }else if (escala.toLowerCase() === 'fahrenheit'){
        return (valor - 32) * 5/9;
    }else{
        return "Escala inválida";
    }
}

let temperaturaCelsius = 25;
let temperaturaFahrenheit = converterTemperatura(temperaturaCelsius, 'celsius');
console.log(temperaturaFahrenheit);