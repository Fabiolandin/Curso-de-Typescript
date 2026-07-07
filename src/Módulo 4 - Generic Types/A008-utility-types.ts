//Record
const objeto1: Record<string, string | number> = {
    nome: 'Luiz',
    idade: 28,
};
console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

//Required - tira o optional dos campos de um tipo
type PessoaRequired = Required<PessoaProtocol>;

//Partial - torna todos os campos opcionais
type PessoaPartial = Partial<PessoaRequired>;

//Readonly - torna todos os campos somente leitura
type PessoaReadonly = Readonly<PessoaRequired>;

//Pick - seleciona campos específicos
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExclude = Exclude<ABC, CDE>; // A | B
type TipoExtract = Extract<ABC, CDE>; // C