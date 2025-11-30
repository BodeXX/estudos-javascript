// Valida campo obrigatório

function verificaCampo(email) {
    if (email.trim() === '') {
        console.log('Preencha o campo de e-mail.');
    } else {
        console.log('E-mail válido.');
    }
}

// Teste com campo preenchido
verificaCampo('teste@');

// Teste com campo vazio
verificaCampo('');
