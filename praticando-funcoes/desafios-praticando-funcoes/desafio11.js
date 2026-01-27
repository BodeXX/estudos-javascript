// Desafio: Contagem regressiva recursiva

// Deve receber um número positivo (ex: 5)
// Deve imprimir esse número e, a cada chamada, reduz em 1
// Ao chegar em 0, exiba a mensagem "Lançamento"

function contagemRegressiva(numero) {
  if (numero > 0) {
    console.log(numero);
    contagemRegressiva(numero - 1);
  } else {
    console.log("Lançamento!");
  }
}

contagemRegressiva(5);
