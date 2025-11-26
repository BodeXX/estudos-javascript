// const numero = 0;
// const indefinido = undefined;
// const nulo = null;
// const textoVazio = '';


const nome = '';

if (nome) {
    console.log('Olá, ', nome);
} else {
    console.log('Ainda não sei o seu nome');
}

const idade = null;

// Verifica se a idade existe (não é nula) E se é maior que 18

if (idade != null) {
    if (idade >= 18) {
        console.log('Maior de idade');
    } else if (idade >= 0 && idade < 18) {
        console.log('Menor de idade');
    }

}

/* ANOTAÇÃO:
  null e undefined são considerados "falsy" (falsos) em contextos booleanos.
  Mas aqui checamos explicitamente para garantir que é um número válido.
*/
