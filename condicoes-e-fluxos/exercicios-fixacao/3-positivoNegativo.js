// Crie uma variável com um número qualquer. Mostre se ele é positivo, negativo ou igual a zero.

const positivo = 10;
const negativo = -5;
const zero = 0;



function verificacao(numero) {
    if (numero > 0) {
        console.log(`O número ${numero} é Positivo`);
    } else if (numero < 0) {
        console.log('Negativo');
    } else {
        console.log('ZERO');
    }
}

verificacao(positivo);
verificacao(negativo);
verificacao(zero);
