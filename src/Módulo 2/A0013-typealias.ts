//Type Alias - criar um apelido para um tipo

//definindo que o tipo idade é number
type Idade = number;

//definindo que o tipo pessoa é um objeto que recebe nome, idade, salario, e corPreferida
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};

//Juntando os dois tipos de cores em um só CorPreferida
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK

//Criando objeto pessoa e recebendo do tipo Pessoa criado lá em cima
const pessoa: Pessoa = {
    nome: 'Luiz',
    idade: 30,
    salario: 200.000
};

//Função para setar cor preferida recebendo pessoa, e o tipo conjunto de cor preferida e retornando o tipo Pessoa
function setCorPreferida(pessoa: Pessoa, cor: CorPreferida) : Pessoa {
    //passando pessoa e o tipo CorPreferida como cor
    return {...pessoa, corPreferida: cor}
}
//Ao digitar o primeiro parametro o segundo vai aparecer a lista de cores
console.log(setCorPreferida(pessoa, 'Azul'))