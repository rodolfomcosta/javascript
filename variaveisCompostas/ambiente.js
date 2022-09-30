let num = [5, 3, 4, 9, 45]

console.log(num)

/*adicionando valores*/

num[5] = 25
console.log(num)

num.push(28) /*adicionando ao final*/
console.log(`quantidade de elementos ${num.length}`)

for (i = 0; i <= num.length; i++){
    console.log(num[i])
}

/*Simplificando o for*/

for (let i in num){
    console.log(num[i])
}

/*Bucando valores e retornando índice (-1 qunado o valor não é encontrado)*/

let pos = num.indexOf(7)
if (pos == -1) {
    console.log(`7 não foi encontrado`)
} else {
    console.log(`7 foi encontrado no índice ${num.indexOf(7)}`)
}

pos = num.indexOf(9)
if (pos == -1) {
    console.log(`9 não foi encontrado`)
} else {
    console.log(`9 foi encontrado no índice ${num.indexOf(9)}`)
}