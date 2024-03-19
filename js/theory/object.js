const person = {
    name: 'Madiyar',
    age: 29,
    isStudent: true,
    lang: ['en', 'tu', 'kaz'],
    adress: {
        city: 'Taraz',
        street: 'pushkin'
    },
    'complex key': 'complex value',
    [1 + 5]: 'Madiyar',
    greet() {
        console.log('svchjbusi', this.name);
    },
    arrow: () => {
        console.log('funcion arrow');
    }
}

// console.log(person.adress);
// console.log(person['adress']);
// console.log(person['complex key']);


// const name = person.name
// const age = person.age
// const lang = person.lang

// const { name, age, lang } = person
// console.log(name, age, lang);

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {console.log(person[key]);
// }
// }

// const logger = {
//     keys() {
//         console.log();
//     }
// }
