// Crie dois arrays de frutas e combine-os usando o operador spread.

let frutas1 = ['manga', 'maracuja', 'morango'];
let frutas2 = ['laranja', 'uva', 'abacaxi'];

console.log(`Primeira Lista de frutas: ${frutas1}\n Segunda Lista de frutas: ${frutas2}`);

// Utilizei o spreadArrays para mesclar os arrays das frutas e guardar em uma nova lista
const todasAsFrutas = [...frutas1, ...frutas2];

console.log('As listas combinadas: ', todasAsFrutas);
