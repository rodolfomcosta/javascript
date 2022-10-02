/* 
    function hoisting

    * a function é declarada depois da chamada
    * é preciso inicializar a function com a palavra function
    * const não sofre elevação (o js não "reorganiza" sua inicialização para antes da chamada)
    * var sofre elevação, porém é inicializada como uma variável indefinida
*/

test();
test1();

/*
function test() {
    console.log('Rodolfo')
}
*/

const test = function(){
    console.log('Rodolfo')
}

var test1 = function(){
    console.log('Rodolfo')
}

