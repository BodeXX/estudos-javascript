// Crie duas variáveis com números. Verifique se os dois são pares e se são iguais. Exiba a conclusão.

let numero1 = 20;
let numero2 = 20;

if (numero1 % 2 === 0 && numero2 % 2 === 0 && numero1 === numero2){
    console.log('Sucesso: Os dois são pares e iguais!');
} else {
    console.log('Falha: Alguma condição não foi atendida.')
}
