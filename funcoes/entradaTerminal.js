const rl = require('readline');

const leitor = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Qual é seu nome? ', (nome) => {
    console.log(`Olá ${nome}`);
    console.log('Boas vindas ao nosso sistema!');

    leitor.question('Qual é a sua idade? ', (idade) => {

        if (idade >= 18) {
            console.log('Você é maior de idade, pode dirigir!');
        } else {
            console.log('Desculpe, você ainda é menor de idade, não tem permissão para dirigir.');
        }

        leitor.close();
    })
} )
