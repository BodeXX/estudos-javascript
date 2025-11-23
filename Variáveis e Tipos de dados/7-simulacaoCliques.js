// Simule um contador de cliques em um botão. Crie uma variável cliques = 0 e incremente 1 a cada "simulação de clique". Mostre o total após 3 simulações.

let numeroCliques = 0;

function simulacaoCliques () {
    numeroCliques += 1;
}

console.log(`Cliques: ${numeroCliques}`);

simulacaoCliques();
simulacaoCliques();
simulacaoCliques();

console.log(`A quantidade de cliques após 3 simulações é de: ${numeroCliques}`);
