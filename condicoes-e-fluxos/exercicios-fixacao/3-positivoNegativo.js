// Função que verifica se um número é positivo, negativo ou zero.



function verificacao(numero) {
    if (numero > 0) {
        console.log(`O número ${numero} é Positivo`);
    } else if (numero < 0) {
        console.log('Negativo');
    } else {
        console.log('ZERO');
    }
}

// Teste com número positivo
verificacao(10);

// Teste com número negativo
verificacao(-5);

// Teste com zero
verificacao(0);
