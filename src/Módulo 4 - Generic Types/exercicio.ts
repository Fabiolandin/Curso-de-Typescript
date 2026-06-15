//definindo a estrutura de cada opção de voto
type VotationOption = {
    numberOfvotes: number;
    option: string,
}

//
export class Votation{
    //array com as opções
    private _votationOptions: VotationOption[] = []

    constructor(
        public details: string
    ) {}

    //adiciona nova opção - recebe um VotationOption e coloca no array
    addVotationOption(votationOption: VotationOption): void {
        this._votationOptions.push(votationOption);
    }

    //se não existir esse indice retorna, se existe o votes desse indice recebe +1
    vote(votationIndex: number): void{
        if(!this._votationOptions[votationIndex]) return;
        this._votationOptions[votationIndex].numberOfvotes += 1;
    }

    //getter para acessar as opções
    get votationOptions(): VotationOption[]{
        return this._votationOptions
    }
}

//gerencia multiplas votações
export class VotationApp {
    //array que guarda várias enquetes
    private votations: Votation[] = [];

    //adiciona nova enquete
    addVotation(votation: Votation): void{
        this.votations.push(votation);
    }

    //exibe todas as enquetes e seus votos
    showVotations(): void{
        for(const votation of this.votations){
            console.log(votation.details)
            for(const votationOption of votation.votationOptions){
                console.log(votationOption.option, votationOption.numberOfvotes)
            }
            console.log('####\n')
        }
    }
}

const votation1 = new Votation('Qual sua linguagem favorita?');
votation1.addVotationOption({ option: 'Python', numberOfvotes: 0});
votation1.addVotationOption({ option: 'JavaScript', numberOfvotes: 0});
votation1.addVotationOption({ option: 'TypeScript', numberOfvotes: 0});
votation1.vote(1);
votation1.vote(2)
votation1.vote(2)

const votationApp = new VotationApp();
votationApp.addVotation(votation1)
votationApp.showVotations()