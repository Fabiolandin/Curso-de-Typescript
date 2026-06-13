//Predicate é uma função que verifica se um valor é de um tipo especifico, retornando true ou false. 
//Ele é usado para criar funções de tipo guarda, que ajudam o TypeScript a inferir tipos em tempo de execução.

export function isNumber(value: unknown): value is number{
    return typeof value === 'number';
}

console.log(isNumber(1)); // true
console.log(isNumber('1')); // false

export function soma<T>(...args: T[]): number {
    const retorno = args.reduce((sum, value) => {
        if(isNumber(sum) && isNumber(value)) {
            return sum + value;
        }
        return sum;
    }, 0);

    return retorno;
}

console.log(soma(1,2,3,));
console.log(soma(...[1, 2, 3, 'a', 'b', 1]));
console.log(soma('a', 'b', 'c'));