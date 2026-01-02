// Function

// elevar um número x a uma potência y

function calculaPotencia(num , pow) {
    let resultado = 1;

    for (let i = 0; i < pow; i++){
        resultado = resultado * num;
    }
    return resultado;
}

console.log('Eleva número x a uma potência y\n');


console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(5, 5));
console.log(calculaPotencia(3, 4));


// Criar função que calcula o fatorial de um número usando recursão.
// Fatorial: n! multiplicação de N por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}

console.log('Fatorial de um número usando recursão \n');

console.log(fatorial(5));


// Arrow Function

// Criar uma função para calcular juros compostos
// Função deve recever os valores no formato inteiro: valor, % de juros e tempo
// Fórmula: valor * (juros elevado a tempo)

const calculaJuros = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}
console.log('Calcula juros compostos\n');


console.log(calculaJuros(1000, 5, 2));


// Callbacks

// Criar uma função que faça operações matemáticas entre 2 valores ( soma e multiplicação)
// Função deve recever por parâmetro: operação desejada, valor1 e valor2

function soma(a, b) { return a + b };
function multiplica(a, b) { return a * b };

function calcula(fnOperacao, valorA, valorB) {
    return fnOperacao(valorA, valorB);
}

console.log('Callback função operações matemáticas\n');


console.log(calcula(soma, 10, 10));
console.log(calcula(multiplica, 10, 2));


// Criar uma função que emita uma mensagem caso usuário x não esteja interagindo com o sistema após quantidade y de tempo

const userId = '4545';

const avisaUsuario = userId => console.log(`Sessão de ${userId} está inativa`);

setTimeout(avisaUsuario, 2000, userId);
