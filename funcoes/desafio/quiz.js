const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: a, b ou c\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n> ', (resposta1) => {
    // TODO: incrementar acertos se respondeu corretamente
    if (resposta1.toLowerCase() === 'b') {
        acertos++;
    }

    rl.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n> ', (resposta2) => {
        // TODO: incrementar acertos se respondeu corretamente
        if (resposta2.toLowerCase() === 'c') {
            acertos++;
        }
            rl.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n> ', (resposta3) => {
                // TODO: incrementar acertos se respondeu corretamente
                if (resposta3.toLowerCase() === 'b') {
                    acertos++;
                }
                    // TODO:
                    // se acertou tudo, dar os parabéns.
                    if (acertos == 3) {
                        console.log('Parabéns!');
                    } else if (acertos == 2) {
                        // se acertou somente 2, muito bom! continue assim!
                        console.log('Muito bom! continue assim!');
                    } else if (acertos == 1){
                        console.log('Bom');
                    }else{
                        // se não acertou nenhuma, continue praticando
                        console.log('Continue praticanto.');
                    }

                    rl.close();
                });
        });
});
