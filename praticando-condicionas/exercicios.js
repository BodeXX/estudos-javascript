// if/else

// Definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;

// caminho triste
const operacao = 'divisão';


if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação'){
    console.log(num1 * num2);
} else {
    console.log('Operação não indentificada');
}



// Localizar o nível de bônus de acordo com a faixa salarial
// ex:  $11000 e acima: 3% de bônus
//      $10999 a $7000: 5% de bônus
//      $6999 a $4000: 7% de bônus
//      $3999 p baixo: 9% de bônus


const salario = 12000;

if (salario >= 11000) {
    console.log('3% de bônus');
} else if (salario < 11000 && salario >= 7000) {
    console.log('5% de bônus');
} else if (salario < 7000 && salario >= 4000) {
    console.log('7% de bônus');
} else {
    console.log('9% de bônus');
}


// Regras de negócio:
// 1. Deve ser divisível por 4 E NÃO divisível por 100
// OU
// 2. Deve ser divisível por 100 E por 400

const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}
