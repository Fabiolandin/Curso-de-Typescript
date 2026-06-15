//Você precisa criar um sistema que gerencia notas de alunos. Cada aluno tem nome e uma lista de notas.
// MOSTRAR todos os alunos e suas notas
// CALCULAR média de um aluno específico (VOCÊ IMPLEMENTA)

interface Aluno{
    nome: string,
    notas: number[],
}

export class Turma{
    private alunos: Aluno[] = [];

    constructor(
        public nomedaTurma: string
    ){
        console.log('Turma ' + nomedaTurma)
    }

    adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    mostrarAluno(): void{
        for (const aluno of this.alunos){
            console.log(aluno.nome + ': ' + aluno.notas.join(', '))
        }
    }

    calculaMediaNome(nomealuno: string): void{
        for(const aluno of this.alunos){
            if(nomealuno === aluno.nome){
                const soma = aluno.notas.reduce((acumulador, nota) =>{
                    return acumulador + nota
                })
                const media = soma / aluno.notas.length
                console.log('A média do ' + aluno.nome + ' é de: ' + media)
            }
        }
    }

    //implementação do deep
    calculaMediaIndice(indice: number): number {
        if(!this.alunos[indice]) {
            console.log('Aluno não encontrado');
            return 0;
        }
        const aluno = this.alunos[indice];
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / aluno.notas.length;
    }
}

const turma1 = new Turma('Turma do bairro')
turma1.adicionarAluno({ nome: "Fabio Amaro", notas: [7, 8, 9] })
turma1.adicionarAluno({ nome: "Gabriel Barros", notas: [1, 2, 3] })
turma1.adicionarAluno({ nome: "Fabio Landin", notas: [9, 9, 9] })
turma1.mostrarAluno()
turma1.calculaMediaNome("Fabio Landin")

//implementação do deep
const mediaAluno = turma1.calculaMediaIndice(0)
console.log('media por indice do aluno ' + mediaAluno)