// Desafio: Listando números pares

// Deve identificar todos os números pares dentro de um intervalo informado e exibi-los de 1 ate o número final (para aplicar filtro em dados financeiros)


const numerosParesIntervalos = (intervalo) => {
    for (let i = 1; i <= intervalo; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

numerosParesIntervalos(5);
