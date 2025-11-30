// Sistema de conversão de notas numéricas para conceitos (A-E).

const notaA = 10;
const notaB = 8;
const notaC = 6;
const notaD = 5.9;
const notaE = 0;
const notaInvalida = 11;



function notaFinal(nota) {
    if (nota >= 9 && nota <= 10) {
        console.log(`Sua nota foi A com valor ${nota}`);
    } else if (nota >= 8 && nota < 9) {
        console.log(`Sua nota foi B com valor ${nota}`);
    } else if (nota >= 6 && nota < 8) {
        console.log(`Sua nota foi C com valor ${nota}`);
    } else if (nota >= 4 && nota < 6) {
        console.log(`Sua nota foi D com valor ${nota}`);
    } else if (nota >= 0 && nota < 4) {
        console.log(`Sua nota foi E com valor ${nota}`);
    } else {
        console.log('error: Número invalido');
    }
}

notaFinal(notaA);
notaFinal(notaB);
notaFinal(notaC);
notaFinal(notaD);
notaFinal(notaE);
notaFinal(notaInvalida);

notaFinal(10);
notaFinal(8.5);
notaFinal(7);
notaFinal(5.9);
notaFinal(3.9);
notaFinal(11);
