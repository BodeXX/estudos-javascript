// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

const pessoas = [
    {nome: 'oliver', idade: 18},
    {nome: 'mauricio', idade: 16},
    {nome: 'jorge', idade: 23},
    {nome: 'fabricio', idade: 35}
]

for (const pessoa of pessoas) {
    if(pessoa.idade >= 18) {
        console.log(pessoa.nome)
    }
}
