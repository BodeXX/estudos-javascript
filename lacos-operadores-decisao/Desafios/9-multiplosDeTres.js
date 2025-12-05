let contador = 0;

for (let i = 1; i <= 100; i++){


    // Verifica multiplos de 3 no laço de 1 a 100
    if (i % 3 === 0) {

        // se é = 0 ele incrementa no contador + 1
        contador++;
    }
}

console.log(`Números entre 1 e 100 divisíveis por 3: ${contador}`);
