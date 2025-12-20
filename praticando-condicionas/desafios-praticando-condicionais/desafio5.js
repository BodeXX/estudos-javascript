// Desafio: Validação de login
// O sistema deve verificar se o usuário é "admin".
// Se for 'admin' o login será bem-sucedido
// Caso contrário deve exibir "Usuário inválido"

const userAdm = 'admin';
const userInvalido = 'jonas';

const validacaoLogin = (user) => {

    return user === 'admin' ? 'Login bem-sucedido' : 'Usuário inválido';
}

console.log(validacaoLogin(userAdm));
console.log(validacaoLogin(userInvalido));
