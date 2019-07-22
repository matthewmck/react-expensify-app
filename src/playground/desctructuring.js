// const person = {
//     name: 'Andrew',
//     age: '26',
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// console.log(`It's ${person.location.temp} in ${person.location.city}.`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`Your are in ${city} ${state}`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ name, , medium] = item;

console.log(`A medium ${name} costs ${medium}`);