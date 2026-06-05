//Abstract - Forçar que toda classe filha tenha aquele método
//Evitar que alguém instancie a classe mãe diretament
export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque)
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque
        console.log(`${this.nome} perdeu vida ${this.vida}!`)
    }

    abstract bordao(): void 
}

export class Guerreira extends Personagem {
    bordao(): void{
        console.log('Guerreira ao ataque!')
    }
}

export class Monstro extends Personagem {
    bordao(): void{
        console.log('AGHHHHHHHHWEWEERRR!')
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000)
const monstro = new Monstro('Monstro', 87, 1000)

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
