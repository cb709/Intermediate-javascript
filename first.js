const person = {
    name: 'Mahdi',
    age: 26,
    address: {
        house: 54,
        block: 2,
        road: 11
    }
}

const { name: a, age: b, address: c} = person;

console.log(c.house);