// Desafio: Classificação de Temperatura
// Crie um programa que verifique o valor da temperatura e exiba uma mensagem:
// - Se for menor que 15, exiba "Está frio".
// - Se for entre 15 e 30, exiba "Está agradável".
// - Se for maior que 30, exiba "Está quente".

const temperaturaFrio = 13; // valores de testes
const temperaturaAgradavel = 25;
const temperaturaQuente = 35;

const verificaTemperatura = (temperatura) => {
    if (temperatura <= 15) {
        console.log('Está frio.');
    } else if (temperatura <= 30) {
        console.log('Está agradável.');
    } else {
        console.log('Está quente.');
    }
}

verificaTemperatura(temperaturaFrio);
verificaTemperatura(temperaturaAgradavel);
verificaTemperatura(temperaturaQuente);

