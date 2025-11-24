// Considere totalAulas = 80 e faltas = 25. Calcule se as faltas ultrapassam 25% das aulas. Mostre a conclusão no console.

const totalAulas = 80;
const faltas = 25;

let limiteFaltas = totalAulas * 0.25;

console.log(`O limite de faltas é: ${limiteFaltas}`);

if (faltas > limiteFaltas) {
    console.log("Situação: Reprovado por falta (Ultrapassou 25%)");
} else {
    console.log("Situação: Aprovado");
}
