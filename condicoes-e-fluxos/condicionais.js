// condição comum

const idade = 17;
if (idade >= 18) {
    console.log('É maior de idade!');
} else {
    console.log('É menor de idade!');
}




// condição com operação ternário;

// idade >= 18 ? console.log('É maior de idade!') : console.log('É menor de idade!');




// entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaDoAluno = 8;

if (notaDoAluno >= 9) {
    console.log('Excelente');
} else if (notaDoAluno >= 7) {
    console.log('Bom');
} else if (notaDoAluno >= 4) {
    console.log('Médio');
} else {
    console.log('Ruim');
}
