var agora = new Date()
var diaSem = agora.getDay()

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        //código
        break
}

/*
    O switch só funciona com números inteiros e strings
    Se o case não tiver um break, a aplicação executar o próximo até achar um, ou terminar o switch
*/
