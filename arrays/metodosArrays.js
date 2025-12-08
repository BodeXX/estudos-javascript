const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .filter cria uma NOVA lista apenas com elementos que passam no teste (true)
// Condição: numero % 2 === 0 (O resto da divisão por 2 é zero? Então é Par)
const numerosPares = numeros.filter(numero => numero % 2 === 0)

// Condição: numero % 2 !== 0 (O resto é diferente de zero? Então é Ímpar)
const numerosImpares = numeros.filter(numero => numero % 2 !== 0)


console.log(`Todos os números: ${numeros}`);
console.log(`Todos os números pares: ${numerosPares}`);
console.log(`Todos os números impares: ${numerosImpares}`);

// .map cria uma NOVA lista de MESMO tamanho, transformando cada item
// Aqui, pegamos cada número e multiplicamos por 2
const numerosDobrados = numeros.map(numero => numero * 2);

console.log(`Nossa lista mapeada ${numerosDobrados}`);
