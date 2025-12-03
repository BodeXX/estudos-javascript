// contar quantos numeros pares e quantos numeros impares nós temos entre 0 e 100

let totalNumerosPares = 0;
let totalNUmerosImpares = 0;

// laço de repetição

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNUmerosImpares++
    }
}

console.log(`Total de números pares: ${totalNumerosPares}`);
console.log(`Total de números impares: ${totalNUmerosImpares}`);
