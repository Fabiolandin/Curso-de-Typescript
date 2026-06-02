//Union types - utilizar quando quer um tipo ou outro ou quantos tipos quiser
function add(a: number | string, b: number | string): number | string{
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    return `${a}${b}`
}

console.log(add(10, 20)) //30
console.log(add('10', '20')) //1020
console.log(add(10, '20')) //1020