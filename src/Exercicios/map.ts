//formate os nomes em uppercase
const pessoas = [
    { primeiro: "ana", ultimo: "souza"},
    { primeiro: "bianca", ultimo: "marins"},
    { primeiro: "caroline", ultimo: "oliveira"},
]

const nomeCompleto = pessoas.map((pessoa) => (pessoa.primeiro + ' ' +pessoa.ultimo).toUpperCase())
console.log(nomeCompleto)


//transforme de dolar para real
const precoDolar = [19.99, 5.50, 100, 7.25]
const precoreal = precoDolar.map((valor) => valor * 5.16)
console.log(precoreal)
