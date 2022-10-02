// throw - para lançar um erro

function sayMyName(name = '') {
    if (name === '') {
        throw 'Nome inválido'
    }

    console.log(name)
}

// try - para tentar executar um bloco de código
// catch - para capturar o possível erro lançado anteriormente

try {
    sayMyName()
} catch(e){
    console.log(e)
}

console.log("Código depois do erro")