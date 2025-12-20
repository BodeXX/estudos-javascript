// if/else

// Definir um fluxo para somar ou multiplicar dois números usando if/else

const num1 = 2;
const num2 = 4;

// caminho triste
const operacao = 'divisão';


if (operacao === 'soma') {
    console.log(num1 + num2);
} else if (operacao === 'multiplicação') {
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


// OP CONDICIONAL E SWITCH

// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

const nome = 'Roberta';
const nota = 8;
const faltas = 3;

const recebeBonus = (nota >= 8) && (faltas <= 2)
    ? `${nome} recebe bônus`
    : `${nome} Não recebe bônus`;

console.log(recebeBonus);



// Criar um fluxo que identifica o tipo de usuário e comunica de acordo.
// Ex: usuário free tem acesso limitado ao app
//     usuário premium tem acesso a todas as funções
//     usuário super premium tem acesso total e bônus especiais

const user = 'free';

switch (user) {
    case 'free':
        console.log('Sua conta é Free, Desculpe, acesso limitado.');
        break;
    case 'premium':
        console.log('Sua conta é Premium, Tem acesso a todas as funções!');
        break;
    case 'super premium':
        console.log('Sua conta é Super premium, acesso total e bônus especiais');
        break;
    default:
        console.log('Tipo de usuário não identificado');
        break;
}
