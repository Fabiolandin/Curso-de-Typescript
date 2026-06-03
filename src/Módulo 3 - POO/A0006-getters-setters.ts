//Getters - para ler/obter/acessar um valor
//Setters - para modificar/definir/alterar um valor

export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) { }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, '');
    }
}

const pessoa = new Pessoa('Luiz', 'Marques', 18, '111.000.111/0001-00')
console.log(pessoa.cpf)
pessoa.cpf = ('123.456.789.-10')
console.log(pessoa.cpf)