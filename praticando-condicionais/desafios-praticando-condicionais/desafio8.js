// Você está criando um sistema de verificação de status de pagamento de clientes. Dependendo do status, o sistema deve exibir uma mensagem apropriada:

// Desafio: Verificando o status de pagamento
// Se o status for "pendente", exibe: "Pagamento pendente".
// Se o status for "aprovado", exibe: "Pagamento aprovado".
// Se o status for "recusado", exibe: "Pagamento recusado".
// Use o switch/case para criar um programa que faça essa verificação e mostre a mensagem correspondente ao status do pagamento.

const statusAprovado = 'aprovado';
const statusReprovado = 'recusado';
const statusPendente = 'pendente';
const statusErro = 'fiado'

const statusPagamento = (status) => {
    switch (status) {
        case statusAprovado:
            console.log('Pagamento aprovado!');
            break;
        case statusReprovado:
            console.log('Pagamento recusado!');
            break;
        case statusPendente:
            console.log('Pagamento pendente!');
            break;
        default:
            console.log('Erro do sistema.');
            break;
    }
}

statusPagamento(statusAprovado);  // Testes
statusPagamento(statusReprovado);
statusPagamento(statusPendente);
statusPagamento(statusErro);
