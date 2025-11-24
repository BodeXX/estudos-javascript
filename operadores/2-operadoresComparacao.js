const idadeJonas = 27;
const idadeAndre = 23;

// Operador de igualdade
const igualdade = idadeJonas == idadeAndre;

console.log(`São iguais? ${igualdade}`);

// Maior que
const maiorQ = idadeJonas > idadeAndre;

console.log(`A idade de Jonas é maior que a idade de André? ${maiorQ}`);

// Menor que
const menorQ = idadeJonas < idadeAndre;

console.log(`A idade de Jonas é menor que a idade de André? ${menorQ}`);

// Maior ou igual
const idade = 27;
const idadeIrmao = 16;

const souMaiorIdade = idade >= 18;
const irmaoMaiorIdade = idadeIrmao >= 18;

console.log(`Sou maior de idade? ${souMaiorIdade}`);
console.log(`Meu irmão é maior de idade? ${irmaoMaiorIdade}\n\n`);


const idade1 = 25;
const idade2 = '25';

console.log(`A idade 1 é 25 type: ${typeof idade1} \n E a idade 2 é 25 type: ${typeof idade2}\n`);

// Comparação estrita
const comparacaoEstrita = idade1 === idade2;

console.log(`São estritamente iguais? ${comparacaoEstrita}`);

// Comparação estrita diferença
const estritaDiferenca = idade1 != idade2;

console.log(`São estritamente diferentes? ${estritaDiferenca}`);


// Comparação diferença
const comparacaoDiferente = idade1 != idade2;

console.log(`São diferentes? ${comparacaoDiferente}`);
