//Encademaneto opcional e operador de coalescencia nula

type Documento = {
    titulo: string,
    texto: string,
    data?: Date;
}

const documento: Documento = {
    titulo: 'O título',
    texto: 'O texto',
    //data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'Não existe data.');
console.log(undefined ?? '2Não existe data.');
console.log(null ?? '3Não existe data.');
