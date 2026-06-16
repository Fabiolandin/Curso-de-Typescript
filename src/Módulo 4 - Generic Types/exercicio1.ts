export class linguagem{ 
    constructor(
        public nome: string,
        public votos: number
    ) {}
}

export class votacoes{
    private opcoes: linguagem[] = []
    
    constructor(
        public titulo: string
    ) {
        console.log(titulo)
    }
    
    addLinguagem(linguagem: linguagem): void {
        this.opcoes.push(linguagem);
    }
    
    votar(indice: number): void {
        if(!this.opcoes[indice]) return;
        this.opcoes[indice].votos += 1;
    }

    exibirInfos(): void{
        for(const opcao of this.opcoes){
            console.log(opcao.nome + ' Votos: ' + opcao.votos)
        }
    }
}

const JavaScript = new linguagem('JavaScript', 0)
const Python = new linguagem('Python', 0)
const TypeScript = new linguagem('TypeScript', 0)
const votacao = new votacoes('Votação de linguagens')
votacao.addLinguagem(JavaScript)
votacao.addLinguagem(TypeScript)
votacao.addLinguagem(Python)
votacao.votar(0)
votacao.votar(1)
votacao.votar(1)
votacao.votar(2)
votacao.exibirInfos()