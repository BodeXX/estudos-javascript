// Crie uma classe Livro com propriedades titulo e autor. Crie dois objetos dessa classe.

class Livro {
    // O constructor configura os dados iniciais
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

// Criando (instanciando) dois objetos diferentes usando o mesmo molde
const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien');
const livro2 = new Livro('Clean Code', 'Robert C. Martin');

console.log(livro1);
console.log(livro2);
