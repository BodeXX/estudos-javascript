// Desafio: Exibindo os caracteres

// A aplicação deve validar senha digitada por um novo usuário
// Deve mostrar, caractere por caractere e todos os simbolos digitados para garantir que nada foi escondido


const senhaCadastrada = 'seguranç@2025';

const validaSenha = (senha) => {
    for (let i = 0; i < senha.length; i++) {
        console.log(`Caractere ${i + 1}: ${senha[i]}`);

    }
}

validaSenha(senhaCadastrada);  // testes
validaSenha('1234');
