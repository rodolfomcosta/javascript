/*

    Array (vetores)

    * lista
    * agrupamento de dados
    * armazenam dados diferentes, porém são preferencialmente usados para dados do msm tipo
    * para dados diferentes, é usado objeto literal
*/

let produtos = ['Leite', 'Arroz', 'Feijão'] //modo utilizado
let nomes = Array('Rodolfo', 'Aline') //pouco utilizada

// adicionando ao final
produtos.push('Carne')
nomes.push('Tiana')

// remover do final
produtos.pop()
nomes.pop()

// adicionar no inicio
produtos.unshift('Macarrão')
nomes.unshift('Amanda')

// remover do inicio
produtos.shift()
nomes.shift()

// remover valores de posição específica
// posição inicial, quantos remover
produtos.splice(1, 2)

// fatiar arrays
// posição inicial, quantos fatiar
produtos.slice(0,2)

// ver tamanho da array
produtos.length

// spreed operator (...) copia todo o conteúdo de um array
let test = [...produtos, 'Ovo', 'Banana']
