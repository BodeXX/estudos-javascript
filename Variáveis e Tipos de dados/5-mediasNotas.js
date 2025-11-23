// Crie variáveis para três disciplinas: matematica, portugues e ciencias, contendo suas respectivas notas. Calcule e mostre a média final com uma mensagem.

let notaMatematica = 8.0;
let notaPortugues = 6.0;
let notaCiencias = 9.0;
let media = 0;

function mediaNotas (matematica, portugues, ciencias) {
    media = (matematica + portugues + ciencias) / 3;
}


mediaNotas(notaMatematica, notaPortugues, notaCiencias);
console.log(`A media é ${media.toFixed(1)}`);
