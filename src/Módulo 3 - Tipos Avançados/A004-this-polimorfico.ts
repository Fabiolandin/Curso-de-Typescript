//This pode ser usado como um tipo
export class Calculadora{
    constructor(
        public numero: number,
    ){}

    add(n: number): this {
        this.numero += n;
        return this;
    }

    sub(n: number): this {
        this.numero -= n;
        return this;
    }

    div(n: number): this {
        this.numero /= n;
        return this;
    }

    mul(n: number): this {
        this.numero *= n;
        return this;
    }
}

export class SubCalculadora extends Calculadora {
    pow(n: number): this {
        this.numero **= n;
        return this;
    }
}

const calculadora = new SubCalculadora(10)
calculadora.add(5).mul(2).div(2).sub(5).pow(2)
console.log(calculadora)