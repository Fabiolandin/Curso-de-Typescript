//Interface Generics
interface PessoaProtocolo<T, U> {
    nome: T
    sobrenome: T
    idade: U
}

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Luiz',
    sobrenome: 'Fernando',
    idade: 28
}

const aluno2: PessoaProtocolo<number, number> = {
    nome: 22,
    sobrenome: 26,
    idade: 28
}

//Type Generics
type PessoaProtocolo2<T = string, U = number> = {
    nome: T
    sobrenome: T
    idade: U
}

const aluno3: PessoaProtocolo2 = {
    nome: 'Luiz',
    sobrenome: 'Fernando',
    idade: 28
}

