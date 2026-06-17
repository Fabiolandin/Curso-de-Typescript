//decorador de método serve para assistir ou para editar as coisas dentro do método
function decorador(
    classPrototype: any, 
    nomeMetodo: string, 
    descriptor: PropertyDescriptor, 
): any {
    console.log(classPrototype);
    console.log(nomeMetodo);
    console.log(descriptor);
    return {}
}

export class UmaPessoa {

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number
    ) { }

    @decorador
    metodo(msg: string): string {
        return `${this.nome} ${this.sobrenome}: ${msg}`
    }

    get nomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor: string) {
        const palavras = valor.split(/\s+/g);
        const primeiroNome = palavras.shift();
        if (!primeiroNome) return;
        this.nome = primeiroNome;
        this.sobrenome = palavras.join(' ');
    }
}