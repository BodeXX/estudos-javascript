// Valida senha segura 6 caracteres ou mais

let senhaInvalida = 'test';
let senhaValida = 'valida';


function validaSenha (senha) {
    if (senha.length >= 6) {
        console.log('Senha válida');
    } else {
        console.log('Senha muito curta');
    }
}

validaSenha(senhaInvalida);
validaSenha(senhaValida);
