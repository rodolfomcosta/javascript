/*

    Object
        * Objeto
        * Propriedades - atributos
        * Funcionalidades - métodos

    {propriedade: "valor"}
*/

const person = {
    name: "Rodolfo",
    age: 30,
    andar: function(andar){
        return andar == 'SIM' ? 'andando' : 'parado'
    }
}

console.log(person.name, person.age, person.andar('SIM'))