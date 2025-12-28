// Desafio: Verificando o acesso restrito

// O sistema por questões de segurança, deve evitar o número 10
// O contador de testes deve exibir os números normalmente, mas precisa ser encerrado imediatamente ao chegar nesse número
// Deve iniciar contagem em 1 e seguir até 20. Se o número 10 for alcançado, o sistema deve exibir uma mensagem de alerta e interromper a contagem.

for (let i = 1; i <= 20; i++){
    if(i === 10){
        console.log('Número proibido encontrado! Encerrando...');
        break;
    } else {
    console.log(i);
    }
}
