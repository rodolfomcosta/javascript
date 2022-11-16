/*

    String

    * Cadeia de caracteres

    "" - aspas duplas
    '' - aspas simples
    `` - template literals ou template strings (permite interpolação)
*/

console.log("aspas 'duplas'")
console.log('aspas "simples"')
console.log(`aspas "duplas", aspas 'simples', interpolação ${1 + 1} e multilinhas
    -----
        código
            -----
`)

console.log("Rodolfo diz, \"To aprendendo JS\".")

/*
    Escape de string

    códigos para utilizar dentro da string

    \' single quote
    \" double quote
    \\ backslash
    \n new line
    \t tab
    \r carriage return (ver funcionalidade)
    \b word boundary (ver funcionalidade)
    \f form feed (ver funcionalidade)
*/

const myStr = "FirstLine\n\tSecondLine\nThirdLine"
console.log(myStr)

let myStr1 = "This is the first setence. "
myStr1 += "This is the second setence."
console.log(myStr1)

// adicionando variavel no final
const myStr2 = "Rodolfo"
let myName = "My name is "
myName += myStr2
console.log(myName)