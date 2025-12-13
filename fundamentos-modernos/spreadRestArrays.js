const frutas = ['Maça', 'Banana', 'goiaba'];

const maisFrutas = ['Uva', 'Morango', 'Kiwi'];

// SPREAD EM ARRAYS (CLONE)
// Cria uma cópia independente.
// Se não usássemos o '...', e fizessemos 'const clone = frutas',
// qualquer alteração em 'frutas' alteraria o 'clone' também.
const clone = [...frutas];

// SPREAD PARA MESCLAR (MERGE)
// Substitui o antigo .concat(). Cria um novo array com todos os itens misturados.
const todasAsFrutas = [ ...frutas, ...maisFrutas];

// PROVA REAL DA CÓPIA
// Adicionamos 'Pitanga' apenas no array original.
frutas.push('Pitanga');

console.log('Original alterado:', frutas); // Tem Pitanga
console.log('Clone intacto:', clone);      // NÃO tem Pitanga (Isso prova que é uma cópia real)
console.log('Mesclado:', todasAsFrutas);

// REST OPERATOR EM ARRAYS
// O 'primeira' pega o índice 0, 'segunda' pega o índice 1.
// O '...restante' cria um array novo com tudo que sobrou (do índice 2 até o fim).
const [primeira, segunda, ...restante] = todasAsFrutas

console.log(primeira);
console.log(segunda);
console.log(restante);
