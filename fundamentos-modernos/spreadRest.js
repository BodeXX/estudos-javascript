let camila1 = {
    nome: 'Camila',
    idade: 29,
    profissao: 'Desenvolvedora'
}

// SPREAD OPERATOR (...)
// Aqui o spread "espalha" as propriedades de camila1 dentro do novo objeto.
// Isso cria uma cópia (shallow copy) e NÃO uma referência.
// Se mudarmos camila2, camila1 original ficaria intacta (se não fosse reatribuída abaixo).
const camila2 = { ...camila1 }

camila2.idade = 30;

console.log('Camila 2: ', camila2); // Mostra idade 30

// ATUALIZAÇÃO COM SPREAD
// Aqui usamos o spread para pegar tudo de camila2.
// IMPORTANTE: As propriedades listadas DEPOIS do spread sobrescrevem as anteriores.
// 'profissao' substitui a antiga e 'possuiCNH' é adicionada.
camila1 = {
    ...camila2,
    profissao: 'Desenvolvedora Senior',
    possuiCNH: true
}

console.log('Camila 1: ', camila1);

// REST OPERATOR (...)
// Visualmente igual ao Spread, mas funciona de modo inverso em desestruturações.
// Aqui ele "coleta" o resto das propriedades que não foram extraídas explicitamente.
// A variável 'nome' pega 'Camila', e 'restante' vira um objeto com todo o resto.
const { nome, ...restante } = camila1;

console.log(nome);
console.log(restante); // { idade: 30, profissao: '...', possuiCNH: true }
