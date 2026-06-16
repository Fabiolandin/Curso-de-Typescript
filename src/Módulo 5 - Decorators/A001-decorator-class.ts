//Decorators são funções que modificam ou adicionam comportamento a classes, métodos ou propriedades. 
//É como um "envelope" que envolve sua classe e adiciona funcionalidades extras.
export class Animal {
    constructor(
        public cor: string
    ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
    return class extends target{
        cor: string;

        constructor(...args: any[]){
            super(...args)
            this.cor = 'Qualquer coisa'
        }
    };
}

const AnimalDecorated = decorator(Animal)
const animal = new AnimalDecorated('Roxo')
console.log(animal)