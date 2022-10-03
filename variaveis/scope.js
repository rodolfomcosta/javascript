/*

    Scope

    * determina a visibilidade de alguma variavel no JS

*/

// var é global e local e poderá funcionar fora de um escopo de bloco
// o var declarado dentro de um escopo sofre o processo de hoisting, ou seja, o js declara a variável com valor undefined que pode ser usada fora do escopo e antes do bloco em que é de fato declarada

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)

/*
    const e let são locais e só funciona no escopo onde foram criadas
*/

console.log('> existe x antes do bloco?', y)

{
    let y = 0
}

console.log('> existe x depois do bloco?', y)