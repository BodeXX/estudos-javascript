// Sistema de autorização de compras baseado em saldo.

let valorCompra = 200.00;
let saldoDisponivel = 250.00;
let saldoIndisponivel = 150.00;


function compra (saldo, valor) {
    if (saldo >= valor) {
        console.log(`Compra Aprovada! \n Seu saldo é de ${saldo}`);
    } else {
        console.log(`Seu saldo é de ${saldo}, Saldo insuficiente.`);
    }
}

// Executa a função com saldo disponivel e indisponivel.
compra(saldoDisponivel, valorCompra);
compra(saldoIndisponivel, valorCompra);
