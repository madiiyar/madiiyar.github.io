/* Data types
// const num = 29
// const str = 'bdhvjh'
// const boo = true
// let madi = 347639649837029749879821n
// console.log(typeof madi); */


/* Arithmetic
// let text1 = 20;
// let text2 = 5;
// let result = text1 < text2;
// let x = 5;
// let z = Math.pow(x,2);
// let x = 100 + 50 * 3;
// console.log(x); */

// Array Methods

// fruits.pop();                            //The pop() method removes the last element from an array:
// let fruit = fruits.pop();                //The pop() method returns the value that was "popped out":
// let size = fruits.length;                //lenght
// let tostring = fruits.toString()         //The JavaScript method toString() converts an array to a string of (comma separated) array values.
// console.log(tostring);
// let fruit = fruits.at(2);                // Get the third element of fruits using at():
// let fruitу = fruits[2];                    // Get the third element of fruits using []:
// console.log(fruitу);
// let fruit = fruits.join(",");       // The join() method also joins all array elements into a string.
// console.log(fruit);
// console.log(fruit);
// fruits.push("snfsjbj");                    // The push() method adds a new element to an array (at the end):
// console.log(fruits);
// fruits.pop()
// console.log(fruits);
// let length = fruits.push("Kiwi");              //The push() method returns the new array length:
// fruits.shift();                           //  the shift() method removes the first array element and "shifts" all other elements to a lower index.
// let fruit = fruits.shift();            //The shift() method returns the value that was "shifted out":
// fruits.unshift("Lemon");                      //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// let fruit = fruits.unshift("Lemon");           // The unshift() method returns the new array length:
// fruits[0] = "Kiwi"                          //Array elements are accessed using their index number:
// fruits[fruits.length] = "Kiwi";               //The length property provides an easy way to append a new element to an array:
// delete fruits[0];                                   //Using delete() leaves undefined holes in the array.


// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);         //The concat() method creates a new array by merging (concatenating) existing arrays:

// const arr1 = ["Cecilie", "Lone"];                    //The concat() method does not change the existing arrays. It always returns a new array.
// const arr2 = ["Emil", "Tobias", "Linus"];            //The concat() method can take any number of array arguments.
// const arr3 = ["Robin", "Morgan"];
// const myChildren = arr1.concat(arr2, arr3);

// const arr1 = ["Emil", "Tobias", "Linus"];          
// const myChildren = arr1.concat("Peter");                //The concat() method can also take strings as arguments:
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// fruits.copyWithin(1, 0);                                 //Copy to index 2, all elements from index 0:
// console.log(fruits);
// fruits.copyWithin(2, 0, 2);                                 //Copy to index 2, the elements from index 0 to 2:
// console.log(fruits);

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();                                   //The flat() method creates a new array with sub-array elements concatenated to a specified depth.
// fruits.splice(2, 2, "Lemon", "Kiwi");                         //The first parameter (2) defines the position where new elements should be added (spliced in).The second parameter (0) defines how many elements should be removed.The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// console.log(fruits);
// fruits.splice(3, 1);                          //With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
// console.log(fruits);
// const months = ["Jan", "Feb", "Mar", "Apr"];

// const spliced = months.toSpliced(2, 1);
// console.log(fruits);
// const citrus = fruits.slice(1, 3);




// let fruit = fruits.unshift("Lemon");           // The unshift() method returns the new array length:

// fruits.unshift("Lemon");
// fruits.push('Madiyar')
// console.log(fruits);
// fruits.push();
// console.log(fruits);
//  let fruit = fruits.toReversed();
// console.log(fruits);
// console.log(fruit);

// const abc = ['e', 'h','y','f']
// let m = abc.toSorted()
// console.log(abc);
// console.log(fruits);

// let fruit = fruits.splice(2,1)
// console.log(fruit);
// fruits.splice(2,1)
// let fruit = fruits.toSpliced(2,1)
// console.log(fruit);

// const index = fruits.indexOf('Mango')
// console.log(index);
// fruits[index] = 'Cheri'
// console.log(fruits);
// const ozgergen = fruits.with(index, 'Madiyar')
// console.log(ozgergen);
// console.log(fruits);

// const capitalfruits = fruits.map( function(fruits){
//     return fruits.toUpperCase()
// })

// console.log(capitalfruits);

// console.log(fruits.includes('Macn sasgo'));
// console.log(fruits.indexOf('Mando'))
// console.log(fruits.indexOf('Mando') !== -1);


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const people = [ 
    {name: "Arman", budjet: 2000},
    {name: "Dos", budjet: 90000},
    {name: "Samat", budjet: 87600}
]

// let findedPerson

// for (let person of people) {
//     if (person.budjet === 87600) {
//         findedPeople = person
//     }
// }

// console.log(findedPeople);

// const findedPerson = people.find(
//     function (person) {
//         return person.budjet === 87600
//         // if (person.budjet === 87600) {
//         //     return true
//         // }
//     }
// )

// console.log(findedPerson);

// const string = 'Hello, how are you?'
// const reversed = string.split('').toReversed().join('')

// console.log(reversed);
// console.log(+'');


// if (4 == 4) {
//     console.log('Ok');
// } else {
//     console.log('error');
// }

// const  num = +prompt('One number', '')

// if (num < 49) {
//     console.log('error');
// } else if (num > 100){
//     console.log('много');
// } else {
//     console.log('ok!');
// }

// const humburger = true
// const fries = true
// if (humburger && fries) {
//    console.log('i am not hungry'); 
// } else {
//     console.log('i am hungry');
// }

// const humburger = 2
// const fries = 1
// if (humburger === 3 && fries) {
//    console.log('good'); 
// } else {
//     console.log('we are hungry');
// }

// console.log(5 && 1 && 10);
// console.log(1 && 5 && 9 && null);
// console.log(0 && 'scnbihbi');
// console.log(1 && 0);

const humburger = 2
const fries = 0
if (humburger || fries) {
   console.log('good'); 
} else {
    console.log('we are hungry');
}