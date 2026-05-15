class Calculadora {
    add(a: number, b: number): number;
    add(a: string, b: string): string;
    add(a: any, b: any): any {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        if (typeof a === 'string' && typeof b === 'string') {
            return a + b;
        }
        return null;
    }
}

const calculadora = new Calculadora();
console.log(calculadora.add(1, 2)); // Prints: 3
console.log(calculadora.add('Olá, ', 'Mundo!')); // Prints: Olá, Mundo!