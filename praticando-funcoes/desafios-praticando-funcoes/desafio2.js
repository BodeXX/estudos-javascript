// Desafio: Calculando desconto

// Toda vez que o cliente aplica um cupom de desconto, o sistema precisa calcular
// Deve calcular quanto ele vai pagar com base no valor original e na porcentagem de desconto

const calcularDesconto = (valor, descontoPorcentagem = 10) => {
    const valorTotal = valor - (valor * descontoPorcentagem / 100);
    console.log(`O valor total com desconto de ${descontoPorcentagem}% é de: ${valorTotal}`);
    console.log(`E o valor original é de: ${valor}`);
}

calcularDesconto(100, 20);
calcularDesconto(100,);
