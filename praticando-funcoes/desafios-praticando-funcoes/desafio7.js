// Desafio: Mensagem com atraso

// Quando o usuário enviar uma pergunta
// Deve simular que está "pensando" ou "processando a resposta"
// E só depois, exibir a resposta final.

const responderUsuario = (nome, callback) => {
    console.log('Processando sua pergunta');
    setTimeout(() => {
        callback(nome);
    }, 3000);
}

const mostrarResposta = (nome) => {
    console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario('Jonas', mostrarResposta)
