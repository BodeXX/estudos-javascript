// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precos = [50.00, 80.00, 100.00];

const precoComDesconto = precos.map((preco) => {
    return preco * 0.9;
});

console.log(`Preço com desconto de 10%: ${precoComDesconto}`);
