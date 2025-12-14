export const soma = (n1, n2) => {
    return n1 + n2;
}

export const subtracao = (n1, n2) => {
    return n1 - n2;
}

export const divisao = (n1, n2) => {
    if (n1 === 0 & n2 === 0) return 'Não é possivel dividir por zero';
    return n1 / n2;
}

export const multiplicacao = (n1, n2) => {
    return n1 * n2;
}
