// Verifica se a idade informada é maior ou igual a 18 para permitir a compra de bebida alcoólica.

function verificaIdade(idade) {
    // Simula uma interação de usuário
    console.log(`Idade informada: ${idade}`);
    const status = idade >= 18 ? 'Pode comprar bebida alcoólica.' : 'Venda proibída para menores de 18 anos.';
    console.log(`Status: ${status}\n---`);
}

// Teste com idade permitida
verificaIdade(20);

// Teste com idade não permitida
verificaIdade(17);

// Teste de borda (idade igual a 18)
verificaIdade(18);
