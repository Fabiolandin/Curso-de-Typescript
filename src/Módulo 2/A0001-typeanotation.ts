//Tipos básicos (aqui ocorre inferencia de tipos)
//tudo dps dos dois pontos é type annotation, que serve para tipar o valor da variavel
let nome: string = 'Fabio';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('123');
let big: bigint = 10n;

//Arrays
let arrayNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayStrings: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let arrayStrings2: string[] = ['a', 'b', 'c', 'd', 'e'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Fabio',
    idade:35
}

console.log(pessoa.nome);

//Funções
function soma(x: number, y: number): number {
    return x + y;
}
const resultado = soma(2, 2);

const soma2: (x: number, y: number) => number = (x, y) => x + y;