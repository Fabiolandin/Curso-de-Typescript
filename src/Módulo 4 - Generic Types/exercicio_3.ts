// Você vai criar um sistema de biblioteca que gerencia livros e empréstimos. Cada livro tem título, autor e quantidade disponível.
// EMPRESTAR livro (diminui quantidade)
// DEVOLVER livro (aumenta quantidade)
// MOSTRAR todos os livros

interface Livro{
    titulo: string,
    autor: string,
    quantidade: number
}

export class Biblioteca{
    private livros: Livro[] = []

    constructor(
        public fraseInicial: string
    ) {
        console.log(fraseInicial)
    }

    adicionarLivro(livro: Livro): void{
        this.livros.push(livro)
    }

    emprestarLivro(indice: number): void{
        if(!this.livros[indice]){
            console.log('Livro não encontrado!');
            return;
        } 
        if(this.livros[indice].quantidade > 0){
            this.livros[indice].quantidade --
            console.log('Livro emprestado com sucesso! Quantidade disponivel:' + this.livros[indice].quantidade)
        } else{
            console.log('O livro não está disponivel para empréstimo')
        }
    }

    devolverLivro(indice: number): void{
        if(!this.livros[indice]){
            console.log('Livro não encontrado!')
        } else{
            this.livros[indice].quantidade ++
        }
    }

    mostrarLivros(): void{
        for(const livro of this.livros){
            console.log(livro.titulo + ' ' + 'Quantidade: '+livro.quantidade + ' Autor: ' + livro.autor)
        }
    }

    buscarLivro(titulo: string): void{
        for(const livro of this.livros){
            if(titulo.toLowerCase() === livro.titulo.toLowerCase()){
                console.log('Livro encontrado:' + livro.titulo + ' ' + 'Quantidade: '+livro.quantidade + ' Autor: ' + livro.autor)
                return
            }
        }
    }
}

const biblioteca = new Biblioteca("Biblioteca Central");

biblioteca.adicionarLivro({ titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", quantidade: 3 });
biblioteca.adicionarLivro({ titulo: "1984", autor: "George Orwell", quantidade: 2 });

biblioteca.emprestarLivro(0)
biblioteca.emprestarLivro(0)
biblioteca.emprestarLivro(0)
biblioteca.emprestarLivro(0)
biblioteca.devolverLivro(0)

biblioteca.mostrarLivros();
biblioteca.buscarLivro("o senhor dos anéis")
