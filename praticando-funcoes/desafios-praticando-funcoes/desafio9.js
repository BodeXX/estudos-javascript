// Desafio: Classificador de consumo elétrico

// O sistema deve calcular o consumo de energia mensal estimado com base no uso diário
// Deve classificar o consumo ( baixo, moderado ou alto) e exibir uma mensagem clara para o usuário

// Classificação de consumo
// Abaixo de 50 => 'Baixo consumo'
// 50 - 199 => 'Consumo moderado'
// 200 ou mais => 'Alto consumo'


function calcularConsumo(potencia, horasPorDia) {
    return (potencia * horasPorDia * 30) / 1000;
}

function classificarConsumo(consumo) {
    if (consumo < 50) {
        return "Baixo consumo";
    } else if (consumo < 200) {
        return "Consumo moderado";
    } else {
        return "Alto consumo";
    }
}

function exibirResumo(nomeAparelho, consumo, classificacao) {
    console.log(`${nomeAparelho} tem consumo de ${consumo.toFixed(1)} kWh/mês e é classificada como ${classificacao}.`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo(nomeAparelho, consumo, classificacao);
