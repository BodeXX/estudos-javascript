// Desafio: Horário de Funcionamento
// Verifique o dia da semana (0=Dom, 1=Seg... 6=Sáb) e exiba o horário:
// - Sábado (6) ou Domingo (0): "A loja está aberta em horário especial: 10h às 14h."
// - Dias úteis (1 a 5): "A loja está aberta no horário normal: 9h às 18h."

const diaEspecial = 6; // Valores para testes
const diaNormal = 2;

const horarioFuncionamento = (dia) => {
    switch (dia) {
        // Dias Úteis (1 a 5)
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log('Dia útil! A loja está aberta no horário normal: 9h às 18h.');
            break;

        // Fim de semana (0 e 6)
        case 0:
        case 6:
            console.log('Fim de semana! A loja está aberta em horário especial: 10h às 14h.');
            break;

        default:
            console.log('Dia inválido. Insira um número de 0 a 6.');
    }
}

horarioFuncionamento(diaNormal);
horarioFuncionamento(diaEspecial);
