//Intersection types (famoso and)

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number}

type Pessoa = TemNome & TemSobrenome & TemIdade; // and

const pessoa: Pessoa = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: 30

}

console.log(pessoa);

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'A' | 'D';
type Intersection = AB & AC & AD;



