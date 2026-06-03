export class Empresa{
    readonly nome: string; //public não é necessario
    private readonly colaboradores: Colaborador[] = []
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj
    }

    //métodos
    adicionaColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador)
    }

    mostrarColaboradores(): void {
        for(const colaborador of this.colaboradores){
            console.log(colaborador)
        }
    }
}

export class Colaborador {
    constructor(
        public readonly nome: string, 
        public readonly sobrenome: string
    ){}
}

const empresa1 = new Empresa('BM-Metais', '11.111.111/0001-11')
const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Flavia', 'Regina')
empresa1.adicionaColaborador(colaborador1)
empresa1.adicionaColaborador(colaborador2)
console.log(empresa1)
console.log(empresa1.nome)
empresa1.mostrarColaboradores();