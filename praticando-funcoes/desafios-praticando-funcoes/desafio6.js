// Desafio: Mensagem pós-processamento
// Deve exibir uma mensagem personalidade para cada tipo de cliente
// Deve ter cliente: comum, vip ou novo usuário

const processarPedido = (nome, tipoCliente, callback) => {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}

const mensagemPersonalizada = (nome, tipoCliente) => {
    let tratamentoTipoCliente = tipoCliente.toLowerCase();

    if (tratamentoTipoCliente === 'vip') {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tratamentoTipoCliente === 'novo') {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}


processarPedido('Jonas', 'vip', mensagemPersonalizada);
