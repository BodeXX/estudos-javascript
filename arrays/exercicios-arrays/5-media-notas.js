// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [7.6, 9, 7, 8];
let somaNotas = 0;
let media = 0;


// Itera sobre as notas para acumular o valor total
for (let nota of notas) {
    somaNotas += nota;
}

// Calcula a média aritmética final
media = somaNotas / notas.length;


if (media >= 7) {
    console.log(`Parabéns, APROVADO com nota ${media}`);
} else {
    console.log(`Sinto muito, Reprovado com nota ${media}`);
}
