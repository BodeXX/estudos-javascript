// Verifica se a idade informada é maior ou igual a 18 para permitir a compra de bebida alcoólica.


const idade = 20;


// Simulei uma interação de usuário
console.log('Informe a idade: ');
console.log(`Idade informada: ${idade}`)
console.log('Processando idade informada... ');


const verificaIdade = idade >= 18 ? 'Pode comprar bebida alcoólica' : 'Venda proibída para menores de 18 anos.';




console.log(`Idade: ${idade} - Status: ${verificaIdade}`);
