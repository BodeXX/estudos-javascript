// Crie uma função que recebe um nome e imprime "Olá, [nome]". Se o nome não for passado, use "visitante" como valor padrão.

const saudacao = (nome = 'visitante') => {
    console.log('Olá, ', nome);
}


saudacao('Jonas');
saudacao();
