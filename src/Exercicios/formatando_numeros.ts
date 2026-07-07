const telefone1 = "18991449585"
const telefone2 = "18992909515"
const telefone3 = "(18) 99144-9585"
const telefone4 = "(18) 99290-9515"
const telefone5 = "18 99144 9585"
const telefone6 = "18 99290 9515"
const telefone7 = "18 991449585"
const telefone8 = "18 992909515"

//tira espaçoes e tira td que n for números
let apenasNumeros = telefone5.replace(/\D/g, '')
console.log('Numero formatado: ' + apenasNumeros)

//formatando todos com o map para salvar no banco
const telefones = [telefone1, telefone2, telefone3, telefone4, telefone5, telefone6, telefone7, telefone8]
const formatados = telefones.map((numeros) => (numeros.replace(/\D/g, '')))
console.log(formatados)

function formatarFront(numero: string) {
    if (numero.length === 11) {
        let numeroFormatado = numero.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
        return numeroFormatado
    } else if (numero.length === 10) {
        let numeroFormatado = numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
        return numeroFormatado
    } else {
        return numero
    }
}

console.log(formatarFront(telefone1))

