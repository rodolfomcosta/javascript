/*

    Object
        * Objeto
        * Propriedades - atributos
        * Funcionalidades - métodos

    {propriedade: "valor"}
*/

const person = {
    name: "Rodolfo",
    age: 30,
    andar: function(andar){
        return andar == 'SIM' ? 'andando' : 'parado'
    }
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano: [1999, 2005, 2010]
}

// acessando valores usando .
person.name

// acessando valores com ['']
person['age']

// alterar/atualizar valores da propriedade
person.name = 'Aline'
produtos.descricao = ['Arroz']
produtos.preco = [4.99] // não se deve usar esse procedimento para inserir mais de um valor, pois ele será sobescrito

// spreed operator
produtos.descricao = [...produtos.descricao, 'Feijão', 'Ovo']
produtos.preco = [...produtos.preco, 6.00, 10.00]
