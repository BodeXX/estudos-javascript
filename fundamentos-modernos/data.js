const agora = new Date(); // Adicionei esta linha para o código funcionar

console.log('Ano: ', agora.getFullYear());
console.log('Mês 0-11: ', agora.getMonth());
console.log('Dia do mês: ', agora.getDate());
console.log('Hora: ', agora.getHours());
console.log('Minutos: ', agora.getMinutes());


// padrão ISO 8601
const nascimento = new Date('1988-07-08T23:00:00.000Z');

console.log(nascimento);


console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'));
console.log('Data formatada (US):', nascimento.toLocaleDateString('US'));
