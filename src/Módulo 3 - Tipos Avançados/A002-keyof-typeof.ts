//Keyof - O keyof pega todas as chaves de um tipo e cria uma união (union type) delas.
//Typeof - O typeof em TypeScript pega o tipo de uma variável/objeto existente e transforma em um tipo.

type CoresObj = typeof coresObj; // Pega o tipo do objeto
type CoresChaves = keyof CoresObj; // Pega as chaves como união

const coresObj = {
    vermelho: 'red',
    verde: 'green',
    azul: 'blue',
    amarelo: 'yellow'
};

function traduzirCor(cor: CoresChaves, cores: CoresObj){
    return cores[cor]
}

console.log(traduzirCor('vermelho', coresObj))
console.log(traduzirCor('verde', coresObj))
console.log(traduzirCor('azul', coresObj))
