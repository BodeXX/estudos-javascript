// Desafio: Cálculo de frete por distância
// Para cada pedido, o sistema precisa calcular o 'valor do frete' com base na 'distancia' até o endereço do cliente

// Até 5 km: frete fixo de R$ 5
// De 5.1 km até 20 km: R$ 0,50 por quilômetro
// Acima de 20 km: frete fixo de R$ 20

const calcularFrete = (distancia) => {
    if (distancia <= 5) {
        return 'Frete fixo de R$5.';
    } else if (distancia <= 20){
        let valorFrete = 0.50 * distancia;
        return `O valor é de R$ 0,50 por quilômetro, o total é de: ${valorFrete}`;
    } else {
        return 'Acima de 20 km, frete fixo de R$ 20,00';
    }
}

console.log(calcularFrete(24));
console.log(calcularFrete(14));
console.log(calcularFrete(3));
