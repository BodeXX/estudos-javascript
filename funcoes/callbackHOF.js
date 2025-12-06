// HOF -> Higher-Order Function === função que recebe outra função como parametro

let calcular = (num1, num2, operacao) => {
    return operacao(num1, num2);
}

let soma = (num1, num2) => {
    return num1 + num2;
}

let divisao = (num1, num2) => {
    return num1 / num2;
}

const resultadoSoma = calcular(10,15, soma); // Soma é uma callback
console.log(`Resultado da soma: ${resultadoSoma}`);

const resultadaDivisao = calcular(32,8, divisao); // Divisão é um callback
console.log(`Resultado da divisao: ${resultadaDivisao}`);
