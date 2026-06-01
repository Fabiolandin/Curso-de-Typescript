//Array<t> - T[]
function multiplicarArgs(...args: Array<number>): number {
    return args.reduce((ac, valor) => ac * valor, 1);
}

function concatenaString(...args: string[]): string {
    return args.reduce((ac, valor) => ac + valor, '');
}

function toUpperCase(...args: string[]): string[] {
    return args.map(valor => valor.toUpperCase());
}

const result = multiplicarArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c')
const uppercase = toUpperCase('a', 'b', 'c')

console.log(result);
console.log(concatenacao);
console.log(uppercase);