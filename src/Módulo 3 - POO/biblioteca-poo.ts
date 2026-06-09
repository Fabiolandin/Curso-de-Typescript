//Locação de livros em uma biblioteca

export class Biblioteca {
    private livros: Livro[] = []

    inserirLivros(...livros: Livro[]): void {
        for (const livro of livros){
            this.livros.push(livro)
        }
    }

    exibirLivros(): void{
        console.log(this.livros)
    }
}

export class Livro {

    public disponivel: boolean

    constructor(
        public titulo: string,
        public autor: string,
    ) {
        this.disponivel = true
    }

    emprestarLivro(): void {
        //se disponivel for false
        if (!this.disponivel) {
            console.log('O livro não está disponivel \n')
        } else {
            console.log('Livro emprestado com sucesso \n')
            this.disponivel = false
        }

    }

    devolverLivro(): void {
        //se o disponivel for true
        if (this.disponivel) {
            console.log('Erro')
        } else {
            console.log('Livro devolvido com sucesso \n')
            this.disponivel = true
        }
    }

    exibirInfo(): void {
        console.log(`Título: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        if (this.disponivel === true) {
            console.log(`Status: Disponível \n`)
        } else{
            console.log(`Status: Emprestado \n`)
        }
    }
}

const livro1 = new Livro('Clean code', 'Robert Martin')
const livro2 = new Livro('Clean code2', 'Robert Martin2')
const livro3 = new Livro('Clean code3', 'Robert Martin3')

const biblio = new Biblioteca()
biblio.inserirLivros(livro1, livro2, livro3)
biblio.exibirLivros()

livro1.emprestarLivro()
livro1.exibirInfo()
livro1.emprestarLivro()
livro1.devolverLivro()
livro1.exibirInfo()
