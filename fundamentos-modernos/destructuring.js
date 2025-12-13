const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
}

// DESESTRUTURAÇÃO (DESTRUCTURING) SIMPLES
// A sintaxe { chave } = objeto cria uma variável com o mesmo nome da chave.
// É um atalho para não precisarmos fazer: const nome = pessoa.nome;
const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// DESESTRUTURAÇÃO EM PARÂMETROS DE FUNÇÃO
// Isso é muito poderoso! Em vez de receber o objeto inteiro (ex: p) e usar p.nome,
// nós "desempacotamos" apenas a propriedade que precisamos direto nos parênteses.
function saudacao({ nome }) {
    console.log('Olá,', nome);
}

// Para testar a função:
saudacao(pessoa); // Saída: Olá, Nathália
