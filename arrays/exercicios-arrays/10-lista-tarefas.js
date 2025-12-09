// Crie um array com 5 tarefas (strings). Use filter para mostrar apenas as tarefas que ainda não foram marcadas como concluídas (use uma convenção como "[x]" para concluídas)


const tarefas = [
    "Estudar JavaScript",
    "[x] Pagar boleto da moto", // Essa já foi
    "Lavar a moto",
    "[x] Ir na academia",       // Essa já foi
    "Comprar pão"
];

let tarefasPendentes = tarefas.filter(tarefa => !tarefa.includes('[x]'));

console.log(tarefasPendentes);
