/*

    Function() constructor

    * expressão new - cria um novo objeto
    * criar um novo objeto
    * this keyword - 

    Criar a função com letra maiúscula não é obrigatório, mas é uma boa prática
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const rodolfo = new Person("Rodolfo")
console.log(rodolfo.walk())

function Carro(name){
    this.name = name
    this.velocity = function(vel){
        if (vel <= 50){
            return this.name + " está dentro da velocidade"
        } else {
            return this.name + " está acima da velocidade"
        }
    }
}

const fusca = new Carro("fusquinha")
console.log(fusca.velocity(60))
let 