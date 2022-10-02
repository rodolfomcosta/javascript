// Manipulando arrays

// Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
let arrayWord = Array.from(word)
console.log(arrayWord)

// Contar elementos de um array
console.log(arrayWord.length)

// Criar Array com construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)

// Separe um texto que contem espaços em um novo array onde cada texto é uma posição do array. Depois, transforme o array em um texto onde eram espaços, coloque _
let phrase = "Uma vez Flamengo, sempre Flamengo"
let myArrayPhrase = phrase.split(" ")
console.log(phrase)
console.log(myArrayPhrase)
let phraseWithUnderscore = myArrayPhrase.join("_")
console.log(phraseWithUnderscore)

// Verificando se o texto contem uma palavra específica
console.log(phrase.includes("Flamengo"))