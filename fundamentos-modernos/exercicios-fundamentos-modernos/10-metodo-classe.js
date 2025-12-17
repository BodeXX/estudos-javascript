// Adicione um método descrever() à classe Livro que retorna uma string com as informações do livro.

class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    // Dentro de classe, não precisamos escrever a palavra 'function'
    descrever() {
        // Usamos o 'this' para pegar os dados DESTE livro específico
        return `O livro "${this.titulo}" foi escrito por ${this.autor}.`;
    }
}

const livro1 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien');

// Chamando a ação (método) do objeto
console.log(livro1.descrever());
