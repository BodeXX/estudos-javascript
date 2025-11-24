const idade = 18;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

// Maior de Idade e não possui CNH

const podeDirigir = maiorDeIdade && possuiCNH;
// && = AND
console.log(`Pode dirigir? ${podeDirigir}`);


// Pode viajar sozinho, maior de idade sem CNH

const podeViajarSozinho = maiorDeIdade || possuiCNH;
// || = OR
console.log(`Pode viajar sozinho? ${podeViajarSozinho}`);


// Se maior de idade, não precisa de acompanhante

const precisaDeAcompanhante = !maiorDeIdade;
// ! = NOT NEGAÇÃO
console.log(`Precisade acompanhante? ${precisaDeAcompanhante}`);
