// Desafio: Contagem regressiva

// Deve retornar uma contagem regressiva automática
// A contagem deve começar de 10 até 0
// Deve exibir a mensagem "Lançar!" no final da contagem.

const contagemLancamento = 10;


const contagemRegressiva = (inicioContagem) => {
    for (let i = inicioContagem; i >= 0; i--) {
        console.log(i);

        if (i == 0) {
            console.log('Lançar!');
        } else {
            console.log('O número deve ser positivo!');

        }
    }
}


contagemRegressiva(contagemLancamento);
