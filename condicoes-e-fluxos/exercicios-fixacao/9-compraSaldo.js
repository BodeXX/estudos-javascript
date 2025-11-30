// Sistema de autorização de compras baseado em saldo.


function compra (saldo, valor) {
    if (saldo >= valor) {
        console.log(`Compra Aprovada! \n Seu saldo é de ${saldo}`);
    } else {
        console.log(`Seu saldo é de ${saldo}, Saldo insuficiente.`);
    }
}

// Teste com saldo suficiente (compra aprovada)
compra(250.00, 200.00);

// Teste com saldo insuficiente (compra recusada)
compra(150.00, 200.00);
