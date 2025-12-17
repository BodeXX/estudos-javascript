// Crie uma função simples chamada somar(a, b) e exporte-a como módulo (modo CommonJS ou ES Modules, dependendo do ambiente).

const somar = (a, b) => {
    return a + b;
}

// Exportando a função para que outros arquivos possam vê-la
// No Node.js padrão, usamos o module.exports
module.exports = somar;
