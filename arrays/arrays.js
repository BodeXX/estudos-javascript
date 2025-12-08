const frutas = ['uva', 'banana', 'abacaxi', 'maça', 'morango'];

// uva = 0
// morango = 4

// Acessa a primeira fruta com frutas[0]
// console.log(`Primeira fruta: ${frutas[0]}`);

// Acessa ultima fruta com frutas[4]
// console.log(`Última fruta: ${frutas[4]}`);

// console.log(`Total de frutas: ${frutas.length}`);

// .push adiciona valor ao array
// frutas.push('melancia');

// console.log(`Total de frutas depois de adicionar melancia: ${frutas.length}`);

// Loop para percorrer o array item por item

for(let i = 0; i < frutas.length; i++) {
    console.log('Índice:', i);
    console.log(frutas[i]);
}


console.log('Usando forEach:');

frutas.forEach((valor, indice) => {
    console.log(`Índice: ${indice} ${valor}`);
})

console.log('Usando for of:');

for(const fruta of frutas) {
    console.log(`Fruta da vez: ${fruta}`);
}
