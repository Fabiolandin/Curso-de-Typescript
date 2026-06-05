export class Carro{
    private readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    freiar(): void {
        this.motor.freiar();
    }
}

export class Motor {
    ligar(): void {
        console.log('Motor está ligando')
    }

    acelerar(): void {
        console.log('Motor está acelerando')
    }

    freiar(): void {
        console.log('Motor está freiando')
    }
}

const carro = new Carro();
carro.ligar()
carro.acelerar()
carro.freiar()