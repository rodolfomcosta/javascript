/*
    function scope

    * toda função retorna alguma coisa
        * funções sem return retornam undefined





    - entender melhor a utilização do return
*/

let subject

/*
function createThink(subject) { // parâmetro de mesmo nome de uma variável já inicializada
    subject = 'Parâmetro diferente' // altera o subject do scopo da função
    return subject
}

function createThink() { // sem parâmetro
    subject = 'Sem parâmetro' // altera o subject inicializado fora do scopo da função
    return subject
}
*/

function createThink(a) { // parâmetro com nome diferente de uma variável inicializada anteriormente
    subject = 'Parâmetro diferente' // altera o subject inicializado fora do scopo da função
    return subject
}


console.log(subject)
console.log(createThink(subject))
console.log(subject)
