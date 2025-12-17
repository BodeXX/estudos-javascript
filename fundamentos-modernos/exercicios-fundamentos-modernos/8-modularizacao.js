// Importando a função do outro arquivo
// O ./ indica que o arquivo está na mesma pasta
const somar = require('./8-funcoes');

const resultado = somar(10, 20);

console.log('O resultado da soma vinda do módulo é:', resultado);
