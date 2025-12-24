// FOR

// Gerar números aleatórios de 1 a 50 e
// Interromper o laço caso o número gerado seja 15.
// Interromper depois de 30 tentativas e contar a quantidade de tentativas.



for (let contador = 1; contador <= 30; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1);

    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`);
        break;
    }
}


// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroAleatorio = 0;
let tentativas = 0;

while (numeroSecreto !== numeroAleatorio) {
    numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas++;
}

console.log(`Adivinhou em ${tentativas} tentativas`);


// Cria um laço que gere um número aleatório de 1 a 50
// executar o laço enquanto não gerar um número par

let numeroRandom = 0;
let tentativas1 = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas1++;

    // Removemos os consoles de dentro do loop para não "sujar" o terminal
} while (numeroRandom % 2 !== 0);

// Agora sim, FORA do loop, avaliamos o resultado final
if (tentativas1 > 1) {
    console.log(`Foram necessárias ${tentativas1} tentativas.`);
} else {
    console.log(`Foi necessária apenas ${tentativas1} tentativa.`);
}

console.log('Número par gerado:', numeroRandom);



// Cria um laço que recebe um texto e verifica se é um palíndromo
// Imprimir no console o texto, infomando se é ou não palíndromo

// const texto = 'alura';
// const texto = 'arara';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

const result = texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`;

console.log(result);


