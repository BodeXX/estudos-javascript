// Crie uma variável saldo iniciando com 0. Depois, simule um depósito de 200 e um saque de 50. Mostre o saldo final no console com uma frase explicando.

let saldo = 0;
let valorDeposito = 200;
let valorSaque = 50;

function deposito (valor) {
    saldo = saldo + valor;
}

function saque (valor) {
    saldo = saldo - valor;
}

console.log(`Efetuando deposito de ${valorDeposito} reais`);
deposito(valorDeposito);


console.log(`O seu saldo é de ${saldo} reais.`);

console.log(`Efetuando saque de ${valorSaque} reais`);
saque(valorSaque);

console.log(`O seu novo saldo é de ${saldo} reais.`);
