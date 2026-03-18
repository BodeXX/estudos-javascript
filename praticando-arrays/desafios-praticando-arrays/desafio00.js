// Desafio Acessando e modificando elementos de um array

// Deve criar um array com itens iniciais da lista de compras
// Acesse e exiba o segundo item da lista.
// Modifique o último item da lista para um novo valor.

const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];

console.log('Lista inicial: ',listaDeCompras);


console.log('Segundo item da lista: ', listaDeCompras[1]);

listaDeCompras[listaDeCompras.length - 1] = 'fruta';

console.log("Lista após modificação:", listaDeCompras);
