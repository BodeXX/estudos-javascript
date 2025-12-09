// Crie uma função que recebe um objeto pessoa e retorna uma frase com seus dados.

const pessoa = {
    nome: 'Jonas',
    idade: 27,
    profissao: 'Programador'
}

const mensagemDados = ((objpessoa) => {
    return `Olá ${objpessoa.nome}, você tem ${objpessoa.idade}, e sua profissão é ${objpessoa.profissao}!`
})

console.log(mensagemDados(pessoa));
