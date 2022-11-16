let pessoas = []
let id_123 = {
    nome: 'Rodolfo',
    idade: 31
}

let id_321 = {
    nome: 'Aline',
    idade: 38
}

pessoas.unshift(id_123)
pessoas.unshift(id_321)
pessoas.forEach(function(nome, i) {
    console.log(pessoas[i].nome)
    console.log(pessoas[i].idade)
})
