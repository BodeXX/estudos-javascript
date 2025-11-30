// Validação de um formulário de cadastro simples.

function validarFormulario(nome, email, idade) {
    // O operador && obriga que TODAS as condições sejam verdadeiras
    if (nome !== '' && email !== '' && idade > 0) {
        console.log(`Formulário enviado com sucesso! \n Bem-vindo, ${nome}.`);
    } else {
        console.log("Erro: Preencha todos os campos corretamente (Nome, Email e Idade maior que 0).");
    }
}

// Teste com dados corretos
validarFormulario('teste', 'teste@email.com', 25);

// Teste com idade inválida
validarFormulario('teste', 'teste@email.com', 0);

// Teste com nome vazio
validarFormulario('', 'teste@email.com', 25);
