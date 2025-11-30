// Exibe uma saudação (Bom dia, Boa tarde, Boa noite) com base na hora atual.

let horaAtual = 8;

if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia!');
} else if (horaAtual >= 12 && horaAtual <= 18) {
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}
