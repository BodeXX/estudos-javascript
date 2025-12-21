// Você está criando um sistema para um jogo, onde o personagem tem que passar por duas condições para conseguir avançar para o próximo nível:

// Desafio: Verificar acesso a nível do jogo

// O personagem precisa ter mais de 50 pontos.
// O personagem deve ter pelo menos uma vida restante.
// Crie um programa que, dado os pontos e as vidas restantes, verifique se o personagem pode ou não avançar para o próximo nível.



const pontosValidos = 60;
const vidasValidas = 2;

const vidasInvalidas = 0;
const pontosInvalidos = 40;

const condicaoNovoNivel = (pontos, vidas) => {

    return pontos > 50 && vidas >= 1
        ? 'Próximo nível liberado!'
        : 'Não pode avançar para o próximo nível.';
}

console.log(condicaoNovoNivel(pontosInvalidos, vidasInvalidas));
console.log(condicaoNovoNivel(pontosValidos, vidasValidas));
