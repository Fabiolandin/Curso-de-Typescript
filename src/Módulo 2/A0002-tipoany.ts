//utilize any apenas em ultimo caso, pois ele desabilita a verificação de tipos
function showMessage(msg: any){
    return msg;
}

console.log(showMessage('Hello World'));
console.log(showMessage(123));