// callback function
// É uma função passada como parâmetro para outra função

function sayMyName(name){
    console.log('Antes de executar a callback')
    name()
    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback!')
    }
)