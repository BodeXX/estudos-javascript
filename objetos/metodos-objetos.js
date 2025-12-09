const pessoa = {
    nome: 'Vinicios',
    idade: 37,
    pets: ['Luke'],
    nacionalidade: 'Brasileiro'
}

// 1. for...in: Itera sobre as propriedades (chaves) do objeto
for (const chave in pessoa) {
    // A variável 'chave' guarda apenas o nome da propriedade (ex: 'nome', 'idade')
    console.log('Chave: ', chave)

    // Para acessar o VALOR, usamos notação de colchetes com a chave dinâmica
    console.log('Valor real: ', pessoa[chave])
}

// 2. Métodos estáticos da classe Object
// Transformam o objeto em Arrays para facilitar a manipulação

// Retorna uma lista com todas as chaves ['nome', 'idade', ...]
const chaves = Object.keys(pessoa);

// Retorna uma lista com todos os valores ['Vinicios', 37, ...]
const valores = Object.values(pessoa);

// Retorna uma lista de listas (matriz) com pares chave/valor [['nome', 'Vinicios'], ...]
const entradas = Object.entries(pessoa);

console.log('Chaves: ', chaves);
console.log('Valores: ', valores);
console.log('Entradas: ', entradas);
