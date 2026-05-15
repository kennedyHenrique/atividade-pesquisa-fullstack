class Pessoa{
    public nome: string;
    public idade: number;
    private CPF: string;
    protected RG: string;


    constructor(nome: string, idade: number, CPF: string, RG: string){
        this.nome = nome;
        this.idade = idade;
        this.CPF = CPF;
        this.RG = RG;
    }

    apresentar(): void{
        console.log(`Olá, Meu nome eh ${this.nome} e tenho ${this.idade} anos.`);
    }
}

class Aluno extends Pessoa{
    public curso: string;
    private matricula: string;


    constructor(nome: string, idade: number, CPF: string, RG: string, curso: string, matricula: string){
        super(nome,idade,CPF,RG);
        this.curso = curso;
        this.matricula = matricula;
    }

    apresentar(): void {
         console.log(`Olá, Eu sou o ${this.nome} e tenho ${this.idade} anos e faço o curso de ${this.curso}`);
    }
}

const pessoa = new Pessoa("Kennedy", 26, "000009", "000000");
pessoa.apresentar(); //Saida: Olá, meu nome eh Kennedy e tenho 26 anos. 

const aluno = new Aluno("kennedy", 26, "9999", "0000", "web fullstack", "2026");
aluno.apresentar(); //Saida: Olá, Eu sou o kennedy e tenho 26 anos e faço o curso de web fullstack