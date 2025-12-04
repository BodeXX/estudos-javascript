// Executa simulação de numeroDigitado por "usuário" e finaliza o loop do/While quando é = 0
function simulaEntradaDeDados() {
    const LIMITE_ALEATORIO = 11;
    let numeroDigitado;
    let contador = 0;
    console.log("--- Iniciando o Programa ---");

    do {
        // Math.random() * 11 gera algo entre 0 e 10.99. O floor arredonda para baixo.
        numeroDigitado = Math.floor(Math.random() * LIMITE_ALEATORIO);
        console.log(`O usuário digitou: ${numeroDigitado}`);

        if (numeroDigitado !== 0) {
            contador++;
        }
    } while (numeroDigitado !== 0);

    console.log(`Fim! Total de números válidos digitados: ${contador}`);
}

simulaEntradaDeDados();
