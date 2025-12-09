// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

const pessoas = {
    nome: 'Jonas',
    idade: 27,
    profissao: 'Programador'
}

for (let chave in pessoas) {
    console.log(`Propriedade: ${chave}, Valor: ${pessoas[chave]}`);
}
