var idade = 88
if (idade < 16) {
    console.log(`Sua idade é ${idade}. Você ainda não pode voltar`)
} else if (idade < 18) {
    console.log(`Sua idade é ${idade}. Seu voto é opcional`)
} else if (idade > 65) {    
    console.log(`Sua idade é ${idade}. Seu voto é opcional`)
} else {
    console.log(`Sua idade é ${idade}. Seu voto é obrigatório`)
}