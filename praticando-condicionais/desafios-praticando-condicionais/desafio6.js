// Desafio: Verificando compatibilidade de tipos de frutas
// Deve verificar se o tipo de fruta informada é compatível com o tipo esperado de acordo a receita
// O suco pode ser feito somente com 'laranja' ou 'abacaxi'

const fruta = 'laranja';
const frutaInvalida = 'maça';


const verificaFruta = (fruta) => {
        if (fruta === 'laranja' || fruta === 'abacaxi') {
            console.log('Fruta compátivel com a receita');
        } else {
            console.log('Fruta incompatível para a receita.');
        }
    }

console.log('Utilizando a fruta laranja: ');
verificaFruta(fruta)
console.log('Utilizando a fruta maça: ');
verificaFruta(frutaInvalida);
