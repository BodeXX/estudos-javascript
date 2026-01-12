// Desafio: Avaliando a pontuação de um usuário

// Deve avaliar o desempenho do usuário de acordo a nota passada e retornar o resultado
// Deve seguir as regras para 'Aprovado', 'Reforço' e 'Reprovado'

// Foi 'aprovado', se a pontuação for igual ou maior que 70
// Precisa de reforço, se a pontuação estiver entre 50 e 69
// Foi reprovado, se a pontuação for menor que 50


const avaliarDesempenho = (nota, callback) => {
    console.log('Pontuação: ', nota);
    callback(nota);
}

const gerarMensagem = (nota) => {
    if (nota >= 70){
        console.log('Parabéns! Você foi aprovado!');
    } else if (nota >= 50) {
        console.log('Precisa de Reforço!');
    } else {
        console.log('Desculpe, você foi reprovado!');
    }
}

avaliarDesempenho(82, gerarMensagem);
avaliarDesempenho(55, gerarMensagem);
avaliarDesempenho(30, gerarMensagem);

