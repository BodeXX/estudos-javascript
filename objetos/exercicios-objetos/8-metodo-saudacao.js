// Crie um objeto com um método chamado "saudacao" que imprime "Olá, eu sou [nome]".

const pessoa = {
    nome: 'Jonas',
    saudacao: function() {
    console.log(`Olá, eu sou ${this.nome}`);
}
}
