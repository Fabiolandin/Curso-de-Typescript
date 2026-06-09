//Type guard é um recurso em type para afunilar o tipo de uma variavel, quando ela pode ser
//de mais de um tipo, ou seja, quando temos uma união de tipos

//exemplo 1
function exibir(valor: string | number) {
    if (typeof valor === 'string') {
        console.log(`O valor é uma string: ${valor.toUpperCase()}`)
    } else {
        console.log(`O valor é um número: ${valor.toFixed(2)}`)
    }
}

exibir('Olá, mundo!')
exibir(3.14159)

//Um Type Guard é qualquer verificação que permite ao TypeScript concluir:
//"Agora eu sei exatamente qual é o tipo dessa variável."