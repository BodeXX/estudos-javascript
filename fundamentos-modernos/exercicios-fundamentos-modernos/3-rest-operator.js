// Crie uma função que receba um número qualquer de argumentos e retorne a soma de todos. Use o operador rest (...).

let somar = (...numeros) => {
    let total = 0;

    // "Para cada 'numero' dentro do array 'numeros'"
    for (let numero of numeros) {
        total += numero; // Soma o valor direto!
    }

    return total;
}

console.log(somar(5, 5, 5, 5, 5, 5));
