
let items = []

let option = prompt("Deseja cadastrar quantos produtos?")

for (let i = 0; i < option; i++){
    items[i] = prompt(`Digite o produto ${(i + 1)}`)
}

alert(`Lista de compras:
        ${items}
    `)
