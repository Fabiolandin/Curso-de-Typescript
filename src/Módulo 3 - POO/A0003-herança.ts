export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        protected cpf: string,
    ) { }

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {
    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome + ' Aluno Stelio Machado'
    }
}

export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome + ' LTDA'
    }
}

const pessoa = new Pessoa('Luiz', 'Marques', 18, '111.000.111/0001-00')
const aluno = new Aluno('Luiz', 'Marquez', 18, '111.000.111/0001-00')
const cliente = new Cliente('Luiz', 'Marquezes', 18, '100.100.100/0001-00')

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())
console.log(cliente.getNomeCompleto())