// Desafio: Gerando mensagens personalizadas

// Ao iniciar, o sistéma deve exibir umas mensagem de saudação para cada usuário
// Porém hávera momentos que o nome do usuário pode estar ausente
// Nesse caso, uma saudação genérica deve ser exibida


const saudacao = (nome = null) => {
    const mensagem = nome !== null ? `Olá, ${nome}! Bem-vindo(a)` : 'Olá, Bem-vindo(a)';
    return mensagem
}

console.log(saudacao());
console.log(saudacao('Jonas'));

