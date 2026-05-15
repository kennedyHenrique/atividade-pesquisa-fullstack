// Classe Abstrata (Herança)
abstract class Animal {
    constructor(public nome: string) {}
    // Método concreto
    comer() { console.log(`${this.nome} está comendo`); }
    // Método abstrato
    abstract fazerSom(): void;
}

// Interface (Contrato)
interface Perigoso {
    nivelRisco: number;
    atacar(): void;
}

class Leao extends Animal implements Perigoso {
    nivelRisco = 10;
    fazerSom() { console.log("Rugido"); }
    atacar() { console.log("Ataque!"); }
}
