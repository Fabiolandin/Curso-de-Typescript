//decorator é chamado antes da classe
function MeuDecorator(constructor: Function){
    console.log('Classe recebida:', constructor.name)
}

@MeuDecorator
class Pessoa {
    constructor(
        nome: string,
        sobrenome: string
    ){}
}

//decorator modificando classe
function AdicionarId (constructor: any){
    constructor.prototype.id = 123
}

@AdicionarId
class Pessoa2 {
    constructor(
        nome: string,
        sobrenome: string
    ){}
}

const p = new Pessoa2('Luiz', 'Roberto');
console.log((p as any).id)

//
function Perfil(tipo: string){
    return function (constructor: Function){
        console.log(`Perfil: ${tipo}`)
    }
}

@Perfil('Admin')
class Usuario{}