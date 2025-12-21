// Desafio: Classificação de Idade
// Crie um programa que classifique a idade de uma pessoa em categorias:
// - 0 a 12 anos: "Criança"
// - 13 a 17 anos: "Adolescente"
// - 18 anos ou mais: "Adulto"

const idadeCrianca = 12; // Valores de testes
const idadeAdolescente = 15;
const idadeAdulto = 27;

const classificacaoDeIdade = (idade) => {
    if (idade <= 12) {
        console.log('Criança');
    } else if (idade <= 17){
        console.log('Adolescente');
    } else {
        console.log('Adulto');
    }
}

classificacaoDeIdade(idadeCrianca);
classificacaoDeIdade(idadeAdolescente);
classificacaoDeIdade(idadeAdulto);
