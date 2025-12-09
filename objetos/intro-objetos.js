const pessoa = {
    nome: 'Ana',
    idade: 26,
    temCNH: true
}

// Adicionando uma nova propriedade dinamicamente (fora da declaração original)
pessoa.sobrenome = 'Paula';

console.log(`Nome: ${pessoa.nome}`);
console.log(`Sobrenome: ${pessoa.sobrenome}`);


const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
}

livro.publicado = true;

// O valor de uma propriedade pode ser qualquer tipo, inclusive um Array (lista)
livro.idiomas = [
    'Ingles', 'Portugues', 'Espanhol'
]

// Métodos de array (como push) funcionam normalmente dentro do objeto
livro.idiomas.push('Mandarim');
livro.idiomas.push('Francês');

console.log('Livro antes: ', livro);

// Remover propriedade (delete apaga a chave e o valor do objeto)
delete livro.paginas

console.log('Livro depois do delete: ', livro);

// Acessando valores com notação de colchetes (útil quando a chave é dinâmica ou tem espaços)
console.log(`Autor do livro ${livro['autor']}`);

// Tentar acessar uma propriedade que não existe não dá erro, retorna 'undefined'
console.log(`Editora ${livro['editora']}`);

const autor = {
    nome: 'J. R. R. Tolkien',
    nacionalidade: 'Britanico',
    idade: 98,
    // Objetos podem conter outros objetos ou listas de objetos
    livros: [livro]
}

console.log('Autor', autor);

// Criando uma referência circular
livro.autor = autor

console.log(livro);

livro.autor.nome
livro.autor.nacionalidade
