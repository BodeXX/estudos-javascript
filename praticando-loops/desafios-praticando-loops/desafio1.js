// Você está criando um aplicativo para exibir a sequência de números até um valor
// que o usuário forneceu. O objetivo é mostrar todos os números a partir de 1 até o
// valor informado pelo usuário, de forma ordenada e crescente.


// Deve contar e exibir seguência de números até valor fornecido
// Mostrar todos os números a partir de 1 até o valor informado pelo "usuário"

const exibirSequencia = (limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(i);
    }
}

const limiteTeste = 5
lancaSeguencia(limiteTeste);
