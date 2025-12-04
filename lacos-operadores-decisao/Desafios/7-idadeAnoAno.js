let anoNascimento = 1998;
let anoAtual = 2025;

// Inicia o laço a partir do ano de nascimento e percorre até o ano atual
for (let ano = anoNascimento; ano <= anoAtual; ano++) {

    // Calcula a idade subtraindo o ano de nascimento do ano da iteração atual
    let idade = ano - anoNascimento;
    console.log(`Em ${ano}, sua idade era ${idade} anos.`);
}
