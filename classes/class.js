class Pessoa {
    // atributos
    // não precisa especificar o tipo de dado
    
    nome 
    idade
    peso

    // atributo estático / atributo da classe
    static totalPessoas = {}

    // método construtor
    constructor(nome, idade, peso) {
        this.nome = nome
        this.idade = idade
        this.peso = peso
        Pessoa.totalPessoas.
    }

    get totalPessoas() {
        return Pessoa.totalPessoas
    }
}

// instanciar o novo objeto

let pessoa1 = new Pessoa('Rodolfo', 31, 70)
let pessoa2 = new Pessoa('Aline', 38, 60)
let pessoa3 = new Pessoa('Tiana', 60, 70)

// atribuir valores

