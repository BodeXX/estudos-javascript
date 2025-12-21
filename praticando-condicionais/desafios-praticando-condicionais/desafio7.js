// Desafio: Controle de acesso com manutenção
// Usuário so finaliza compra se o carrinho não estiver vazio
// Desenvolver verificação se a compra pode ser finalizada
// Se vazio montre 'Compra finalizada com sucesso!'
// Caso contrário exiba 'Não é possível finalizar a compra: carrinho vazio.'

const carrinhoVazio = false;

const verificaCarrinho = (estaVazio) => {
    // Se estaVazio NÃO for verdadeiro (ou seja, for falso), a compra ocorre
    return estaVazio !== true
        ? 'Compra finalizada com sucesso!'
        : 'Não é possível finalizar a compra: carrinho vazio.';
}

console.log(verificaCarrinho(carrinhoVazio));


