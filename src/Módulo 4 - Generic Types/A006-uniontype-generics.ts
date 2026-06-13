//Unindo tipos em generics

export function unirObjetos<T, U>(objeto1: T, objeto2: U): T & U {
    return Object.assign({}, objeto1, objeto2);
}

const objeto1 = { nome: 'Luiz', idade: 28 };
const objeto2 = { sobrenome: 'Fernando', cidade: 'São Paulo' };
const objetoUnido = unirObjetos(objeto1, objeto2);
console.log(objetoUnido); // Luiz