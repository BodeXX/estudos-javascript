// Valida campo obrigatório

let email = 'teste@';
let emailVazio = '';


function verificaCampo(email) {
    if (email.trim() === '') {
        console.log('Preencha o campo de e-mail.');
    } else {
        console.log('E-mail válido.');
    }
}

verificaCampo(email);
verificaCampo(emailVazio);
