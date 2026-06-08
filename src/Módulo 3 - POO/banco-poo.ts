//Arquivo para fazer o depositar sacar e ver saldo de um banco

//1)não estava conseguindo dar o console.log(conta1.saldo) diretamente ai fiz o get e funcionou, mas porque?
//Resposta: Porque _saldo é protected (não pode ser acessado fora da classe). O get saldo() age como se fosse uma 
// propriedade pública, mas por baixo dos panos ele retorna this._saldo de forma controlada.

//2)tendo um get posso fazer um método para exibir o saldo?
//pode porém para funções simples mantenha como está, para mais complexas faça o método.

export class contaBancaria {

    private logs: string[] = [];

    constructor(
        protected numeroConta: number,
        protected _saldo: number,
    ){

        this.logs.push(`Conta criada com saldo de R$${this._saldo}`)
    }
    
    get saldo(): number {
        return this._saldo;
    }

    sacar(valorSacado:number): number {
        if(valorSacado > this._saldo){
            console.log('Não foi possivel realizar o saque')
        } else{
            const msg = `Saque de R$${valorSacado}`
            this.logs.push(msg)
            this._saldo = this._saldo - valorSacado
        }
            return this._saldo
    }

    depositar(valorDeposito:number): number{
        if(valorDeposito <= 0){
            console.log('Não foi possivel realizar o saque')
        } else{
            const msg = `Deposito de R$${valorDeposito}`
            this.logs.push(msg)
            this._saldo = this._saldo + valorDeposito
        }
            return this._saldo
    }

    verExtrato(): void{
        console.log("==========================");
        if(this.logs.length === 0) {
            console.log("Nenhuma transação realizada");
        } else {
            this.logs.forEach((log) => {
                console.log(`${log}`);
            });
        }
        console.log(`Saldo final de R$${this._saldo}`)
        console.log("==========================\n");
    }

}

const conta1 = new contaBancaria(12341, 1200)
conta1.sacar(1200)
conta1.depositar(1200)

conta1.verExtrato()