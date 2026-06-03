//SUPER É UTILIZADO PARA ACESSAR MÉTODOS SEM TER Q RE-ESCREVER ELES TD DNV

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

//método utilizando o super
export class Aluno extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public readonly ra: string
    ){
        super(nome, sobrenome, idade, cpf)
    }


    getNomeCompleto(): string {
        console.log('Adicionando algo antes de aluno')
        return super.getNomeCompleto() + this.ra
    }
}

//método re-escrevendo todo
// export class Aluno extends Pessoa {
//     getNomeCompleto(): string {
//         return this.nome + ' ' + this.sobrenome + ' Aluno Stelio Machado'
//     }
// }

const pessoa = new Pessoa('Luiz', 'Marques', 18, '111.000.111/0001-00')
const aluno = new Aluno('Luiz', 'Marquez', 18, '111.000.111/0001-00', ' 1623420')

console.log(pessoa.getNomeCompleto())
console.log(aluno.getNomeCompleto())