let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    console.log(`${i} - ${fruta}`)
})

frutas.forEach(function(fruta) {
    console.log(`${fruta}`)
})

// funcoes anonimas geralmente usadas como parametros em outras funcoes