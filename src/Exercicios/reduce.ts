//Dado um array de números, use reduce para somar apenas os números pares
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaPares = numeros.reduce((acumulador, valorAtual) => {
    if(valorAtual % 2 === 0){
        acumulador = acumulador + valorAtual
    }
    return acumulador
})

console.log(somaPares)