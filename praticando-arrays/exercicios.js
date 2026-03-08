// Array 

// Construindo arrays e acessando seus elementos através de índices
const array = [1, 2, 3, 4, 5];


console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// Modificando um elemento do array
array[0] = 10;
console.log(array[0]);

// Array com uma seguência de números entre x e y com método push
function criarArraySequencia(x, y) {
    const sequencia = [];
    for (let i = x; i <= y; i++) {
        sequencia.push(i);
    }
    return sequencia;
}

const arraySequencia = criarArraySequencia(5, 10);
console.log(arraySequencia);

// clonar array multidimensional com "deep copy"

const arr1 = [[1, 2], [3, 4]];

function deepCopyArray(arr) {
    return arr.map(subArr => subArr.slice());
}

const arr2 = deepCopyArray(arr1);
arr2[0][0] = 10;

console.log(arr1);
console.log(arr2);


// filtrar um array e alterar valores especificos
// ex: alterar numeros para strings
const numeros = [1, 2, 3, 4, 5, 6];

const cpfs = [12345678900, '98765432100', '11122233344'];


// operador ternário
const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString());

// const result = cpfs.map(cpf => {
//     if (typeof cpf === 'string') {
//         return cpf;
//     } else {
//         return cpf.toString();
//     }
// });

console.log(result);