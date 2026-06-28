//Namespace foi substituido por módulos, não é usado em aplicações modernas
namespace MeuNamespace{
    const nome = 'Roberto';

    export class PessoaDoNamespace{
        constructor(
            public nome: string
        ){}
    }

    const pessoa22 = new PessoaDoNamespace('Luiz')
    console.log(pessoa22);
}

const pessoa22 = new MeuNamespace.PessoaDoNamespace('Gabriel')
console.log(pessoa22)