// Crie uma variável com a data atual e exiba o dia, mês e ano formatados.

const agora = new Date();
let ano = agora.getFullYear();
let dia = agora.getDate();
let mes = agora.getMonth() +1;

console.log(`Data de hoje: ${dia}/${mes}/${ano}`);

// outra forma de formatação sem necessidade de variaveis

console.log('Data de hoje com outro método: ', agora.toLocaleDateString('pt-BR'));
