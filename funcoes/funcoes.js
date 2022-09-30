function soma(n1, n2){
    return n1 + n2
}

function multiplicar(n1, n2){
    return n1 * n2
}

function dividir(n1, n2){
    return n1 / n2
}

function subtracao(n1, n2){
    return n1 - n2
}

console.log(`Funções com o número 5 e 5: Soma${soma(5, 5)}; multiplicação ${multiplicar(5, 5)}; divisão${dividir(5, 5)}; subtração ${subtracao(5, 5)}`)

/*Padronizando parâmetros*/

function somaPadrao(n1=0, n2=0){
    return n1 + n2
}

console.log(somaPadrao(8, 8))
console.log(somaPadrao(8))
console.log(somaPadrao())