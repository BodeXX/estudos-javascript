// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.



const frutas = ['manga', 'uva', 'abacaxi', 'morango'];

console.log(`A lista de frutas: ${frutas}\n`);

// método de arrays para adicionar item ao final
frutas.push('kiwi');

console.log(`A lista de frutas após adicionar novo item ao final: ${frutas}\n`);

// metodo de arrays para remover primeiro item da lista
frutas.shift();

console.log(`A lista de frutas após remover o primeiro item: ${frutas}`);

