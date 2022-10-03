/*

    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log('Falsy')
console.log(0 ? 'Verdadeiro' : 'False')
console.log(NaN ? 'Verdadeiro' : 'False')
console.log()

/*

    TRUTHY

    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log('Truthy')
console.log([] ? 'Verdadeiro' : 'False')
console.log(0 ? 'Verdadeiro' : 'False')
console.log(-Infinity ? 'Verdadeiro' : 'False')