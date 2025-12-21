// Você está desenvolvendo um sistema que exibe a situação da bateria de um dispositivo com base na porcentagem de carga. O sistema deve classificar a bateria nas seguintes categorias:

// "Crítica": se a bateria estiver abaixo de 20%
// "Moderada": se estiver entre 20% e 80%
// "Cheia": se estiver acima de 80%

const bateriaModerada = 65;
const bateriaCritica = 15;
const bateriaCheia = 90;

const verificaCarga = (bateria) => {
    return bateria < 20 ? 'Bateria critica'
        : bateria <= 80 ? 'Bateria Moderada'
            : 'Bateria Cheia';
}

console.log(verificaCarga(bateriaCheia)); // testes
console.log(verificaCarga(bateriaCritica));
console.log(verificaCarga(bateriaModerada));
console.log(verificaCarga(20)); // Deve retornar 'Bateria Moderada' (limite inferior)


