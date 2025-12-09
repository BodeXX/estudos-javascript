// Crie um array de preços e calcule o valor total da compra. Depois, aplique um cupom de 20% de desconto e mostre o valor final.

const precos = [89.99, 150.00, 280.00, 170.00];
let valorTotal = 0;
let taxaDesconto20 = 0.8;

for (let preco of precos) {
    valorTotal += preco;
}

let multiplicadorDesconto = valorTotal * taxaDesconto20;

console.log(`Valor final a pagar: ${multiplicadorDesconto.toFixed(2)}`);
