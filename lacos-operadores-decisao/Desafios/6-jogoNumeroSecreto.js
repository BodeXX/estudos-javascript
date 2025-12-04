let numeroSecreto = 7;
let tentativas = [3, 5, 7];

// A função recebe o array, mas a regra interna limita a 3 iterações
function jogoNumeroSecreto(listaDeTentativas) {
    for (let i = 0; i < 3; i++) {
        // Segurança: verifica se existe um número naquela posição (caso o array tenha menos de 3 itens)
        if (listaDeTentativas[i] === undefined) {
            break;
        }
        if (listaDeTentativas[i] === numeroSecreto) {
            console.log(`Número escolhido ${listaDeTentativas[i]}`);
            console.log("Acertou!");
            break;
        } else {
            console.log(`Número escolhido ${listaDeTentativas[i]}`);
            console.log("Errou, tente novamente.");
        }
    }
}

jogoNumeroSecreto(tentativas);
