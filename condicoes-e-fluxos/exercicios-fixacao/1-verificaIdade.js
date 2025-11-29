// Peça a idade da pessoa em uma variável. Se for 18 ou mais, mostre "Pode comprar bebida alcoólica". Caso contrário, mostre "Venda proibida para menores de 18 anos".


const idade = 20;


// Simulei uma interação de usuário
console.log('Informe a idade: ');
console.log(`Idade informada: ${idade}`)
console.log('Processando idade informada... ');


const verificaIdade = idade >= 18 ? 'Pode comprar bebida alcoólica' : 'Venda proibída para menores de 18 anos.';




console.log(`Idade: ${idade} - Status: ${verificaIdade}`);
