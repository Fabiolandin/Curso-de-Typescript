let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

function createPerson(firstName: string, lastName?: string,): {
    firstName: string;
    lastName: string | undefined;
} {
    return {
        firstName,
        lastName,
    };
}

let pessoa = createPerson('Fabio')
console.log(pessoa)

//vefificar se o valor é um número se for, retorna o quadrado do número, se não for, retorna null
function squareOf(x: any) {
    if (typeof x === 'number') return x * x;
    return null;
}
