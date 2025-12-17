// Crie dois objetos: um com nome e outro com idade. Combine-os em um terceiro objeto usando spread.

const dadosNome = {
    nome: 'Jonas'
};

const dadosIdade = {
    idade: 27
};

const pessoaCompleta = {
    ...dadosNome,
    ...dadosIdade
};

console.log('Pessoa combinada:', pessoaCompleta);
