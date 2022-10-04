let result = prompt("Adivinhe o número que estou pensando. Está entre 0 e 10")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while (Number(result) != randomNumber){
    result = prompt("Erro, tente novamente.")
    xAttempts++
}

alert(`É o número ${result}. Parabéns! Você adivinhou em ${xAttempts} tentativas`)

