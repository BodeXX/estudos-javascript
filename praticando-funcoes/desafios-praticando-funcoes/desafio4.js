// Desafio: Verificando se um número é par ou ímpar
// Deve informar se o número informado é 'par' ou 'impar'

const verificarParidade = (numero) => {
    const verificacao = numero % 2 === 0 ? 'Par' : 'Impar';
    return verificacao
}

console.log(verificarParidade(8));
console.log(verificarParidade(5));
