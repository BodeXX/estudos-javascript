// Estrutura do laço de repetição FOR simples
for (let i = 1; i <= 5; i++) {
    console.log(`Número atual: ${i}\n`);
}

// Estrutura de repetição For com estrutura de decisão encapsulada if/else

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log(`Número par encontrado: ${numero}\n`);
    } else {
        console.log(`Número ímpar encontrado: ${numero}\n`);
    }
}


const palavra = 'calopsita';

// palavra.length indica quantos caracteres uma string possui
// palavra[1] - Pega a letra na posição indicada

for (let contador = 0; contador < palavra.length; contador++) {
    console.log(palavra[contador]);
}
