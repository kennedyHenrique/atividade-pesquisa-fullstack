interface Area {
    area(): number;
}

class Triangulo implements Area {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return (this.base * this.altura) / 2;
    }
}

const triangulo = new Triangulo(4, 5);
console.log(triangulo.area()); // Prints: 10