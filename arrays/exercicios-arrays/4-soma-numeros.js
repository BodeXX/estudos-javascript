// Crie um array com uns 5 a 10 números inteiros. Use um loop for (pode ser o clássico ou o for...of) para somar todos os valores e mostrar o total no final.

const listaDeNumeros = [5, 10, 15, 20, 25, 100, 500, 1000];
let soma = 0;

for (let numeros of listaDeNumeros) {
    soma += numeros;
}

console.log(soma);
