// Sintaxe função tradicional

function saudacao (nome) { // Nome é um parametro da função saudacao
    console.log(`Olá ${nome}`);
}

saudacao('Jonas'); // Jonas é o "argumento"
saudacao('teste');
saudacao('Alberto');

// Sintaxe arrow functions

/*
const calcularDobroDeUm = (numero) => {
    return numero * 2;
}
*/


// Se tem apenas um parâmetro, pode tirar os parênteses (opcional)
// Se tem apenas uma linha de retorno, tira as chaves e o 'return'
const calcularDobroDeUm = numero => numero * 2;


// testando
const numeroDobrado = calcularDobroDeUm(2);
console.log(`O dobro de 2 é: ${numeroDobrado}`);



/*

-this: Refere-se ao contexto onde a função é chamada.

 Funções tradicionais: Possuem seu próprio valor de this, dependendo da forma como são chamadas.

-Arrow Functions: Não têm seu próprio this; capturam o valor de this do contexto em que são declaradas.

 Antes de Arrow Functions, usávamos .bind() para corrigir problemas com this.

*/
