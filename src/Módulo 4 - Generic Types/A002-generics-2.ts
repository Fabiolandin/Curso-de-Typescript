//Array<number> é a mesma coisa que number[]
//esse esta usando o generic Array<T>
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7];

async function promiseAsync(){
    return 1;
}

// Promise<number> = uma Promise que resolve com um número
function minhaPromise(): Promise<number>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    })
}

promiseAsync().then((resultado) => console.log(resultado + 1))