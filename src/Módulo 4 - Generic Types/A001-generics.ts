//Generics são como variaveis de tipo. voce cria uma função que funciona com qualquer tipo
//mas mantém a informação de qual tipo especifico foi usado.

type FilterCallback = (
    value: unknown, 
    index?: number, 
    array?: unknown [],
) => boolean;


//n ta funcionando
export function meuFilter<T>(array: T[], callbackfn: (value: T) => boolean): T[] {
    const newArray: T[] = [];

    for (let i = 0; i < array.length; i++){
        if(callbackfn(array[i])){
            newArray.push(array[i])
        }
    }

    return newArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5)
console.log(arrayFiltradoOriginal)

const arrayFiltrado = meuFilter(array, (value) => {
    if (typeof value === 'number') return value < 5;
    return false;
})
console.log(arrayFiltradoOriginal)