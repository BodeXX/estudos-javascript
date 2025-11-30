// Sistema de conversão de notas numéricas para conceitos (A-E).

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

// Teste para nota A
notaFinal(10);
// Teste para nota B
notaFinal(8.5);
// Teste para nota C
notaFinal(7);
// Teste para nota D
notaFinal(5.9);
// Teste para nota E
notaFinal(3.9);
// Teste para nota inválida
notaFinal(11);
