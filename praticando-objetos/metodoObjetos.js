const cliente = {
    nome: 'Joanna A',
    cpf: '12344556542',
    email: 'j@j.com',
    score: 865,
    recorrente: true,
    tags: ['premium', 'clube'],
};

console.log(Object.keys(cliente));
// [ 'nome', 'cpf', 'email' etc...]


console.log(Object.values(cliente));
//[ 'Joanna A', '123456234', 'j@j.com', 865, true, [ 'premium', 'clube' ]]


console.log(Object.entries(cliente));
// [
//      [ 'nome', 'Joanna A' ],
//      [ 'score', 865 ],
//      [ 'recorrente', true ],
//      [ 'tags', [ 'premium', 'clube' ]
//  ]
//

// Interação de objetos com FOR...IN
for (const info in cliente) {
    const texto = `chave ${info}, valor do tipo ${typeof cliente[info]}`;
    console.log(texto);
}
