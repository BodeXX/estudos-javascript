import { createInterface } from 'readline';
import { soma, subtracao, multiplicacao, divisao } from './operacoesMatematicas.js';

const leitor = createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o primeiro número:\n> ', (n1) => {

    leitor.question('Digite a operação:\n+ soma\n- subtração\n* multiplicação\n/ divisão\n> ', (operacao) => {

        leitor.question('Digite o segundo número:\n> ', (n2) => {

            const numero1 = Number(n1);
            const numero2 = Number(n2);

            let resultado = null;

            if (operacao == '+') {
                resultado = soma(numero1, numero2);
            } else if (operacao == '-') {
                resultado = subtracao(numero1, numero2);
            } else if (operacao == '*') {
                resultado = multiplicacao(numero1, numero2);
            } else if (operacao == '/') {
                resultado = divisao(numero1, numero2);
            } else {
                console.log('Operação inválida!');
                resultado = null;
            }

            if (resultado != null) {
                console.log('O resultado da operação é: ', resultado);
            }

            leitor.close();
        })
    })
})
