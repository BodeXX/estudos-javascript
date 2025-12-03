// Exibe a tabuada de um número no console de 0 a 10.
function exibirTabuada(numero) {
    console.log(`*----- Tabuada do ${numero} -----*`);
    for (let i = 1; i <= 10; i++) {
        let multiplicacao = numero * i;
        console.log(`|  ${numero}    x   ${i}   =   ${multiplicacao}`);
    }
}

tabuada(7);
tabuada(5);
