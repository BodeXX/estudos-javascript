// Desafio: Solicitando nomes até digitar 'fim'

// Deve receber a entrada de quantos nomes quiser, um por vez.
// Deve continuar o processo até que seja encontrado a palavra 'fim'

const entradas = ["Ana", "Bruno", "Carla", "fim", "Daniel"];
const entradasSemFim = ["Ana", "Bruno", "Carla", "Daniel"];

const verificaLista = (lista) => {
    let i = 0;
    while (i < lista.length) {
        if (lista[i] === 'fim') {
            console.log("Fim encontrado, parando o loop.");
            break;
        }
        console.log(`Nome: ${lista[i]}`);
        i++;
    }
}

verificaLista(entradas);
verificaLista(entradasSemFim); // Lista de teste sem 'fim' para provar que não trava
