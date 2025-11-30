// Valida senha segura 6 caracteres ou mais

function validaSenha (senha) {
    if (senha.length >= 6) {
        console.log('Senha válida');
    } else {
        console.log('Senha muito curta');
    }
}

// Teste com senha inválida (curta)
validaSenha('test');

// Teste com senha válida
validaSenha('senhaforte');
