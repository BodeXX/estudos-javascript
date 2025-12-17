// Crie um objeto com nome, idade e email. Use destructuring para extrair essas informações em variáveis separadas.

const pessoa = {
    nome: 'Jonas',
    idade: 27,
    email: 'jonasteste@teste.com'
}

const {nome, idade, email} = pessoa;

console.log(nome);
console.log(idade);
console.log(email);
