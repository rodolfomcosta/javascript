//for...in

let person = {
    name: 'Rodolfo',
    age: 30,
    weight: 70.5
}

for (let property in person) {
    console.log(property)
    console.log(person[property])
}

console.log(person.name)
console.log(person.age)
console.log(person.weight)