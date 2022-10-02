// Manipulando arrays

let techs = ["HTML", "CSS", "JS"]

// Adicionar um item no fim
techs.push("Node.js")

// Adicionar no começo
techs.unshift("SQL")

// Remover do fim
techs.pop()

// Remover do começo
techs.shift()

// Pegar somente alguns elementos
console.log(techs.slice(1, 3))

// Remover 1 ou mais itens em qualquer posição
//techs.splice(0, 3) (índice para iniciar a remoção, quantos itens quer remover)

// Encontrar a posição de um elemento
let index = techs.indexOf('CSS') // resultado -1 quando não é encontrado

console.log(techs)
console.log(index)