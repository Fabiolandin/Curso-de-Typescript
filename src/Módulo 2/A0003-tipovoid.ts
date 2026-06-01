function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Fabio',
    sobrenome: 'Linhares',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    }
}

semRetorno('Fabio', 'Linhares');
pessoa.exibirNome();
