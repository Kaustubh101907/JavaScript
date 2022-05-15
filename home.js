console.log('hello');

// Alert
// alert('hello my name is kaustubh');

// variables
var b = 'smoothie';
console.log(b);

document.getElementById('something').innerHTML = 'Hey There';

// Using Prompt
// let age = prompt('What is your age?');
// console.log(age);

// Functions
function greeting() {
    let name = prompt('What is your name?');
    console.log('Hello ' + name);
}

// greeting();

function sum(a, b) {
    console.log(a+b);
}

sum(10, 20);

// Data Types
let yourAge = 18; // number
let yourName = 'bob'; // String
let name = {first: 'Jane', last: 'Doe'}; // object
let truth = false; // boolean
let groceries = ['apple', 'banana', 'oranges']; // array
let random; // undefined
let nothing = null; 

// Arrays
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[0]);
fruits[1] = 'pear';

for (let i = 0 ; i < fruits.length ; i++) {
    console.log(fruits[i]);
}

// Array methods
console.log(fruits.toString());
console.log(fruits.join('-'));
console.log(fruits, fruits.pop(), fruits); // pops and returns the last item of the array
console.log(fruits.push('kiwi')); // it adds kiwi to the last of the array
console.log(fruits[fruits.length] = 'haha');  
fruits.shift(); //remove first element from the array
fruits.unshift('lala'); // this will add first element in array
let vegis = ['tomato', 'ginger', 'garlic'];
let all = fruits.concat(vegis);
console.log(all);
console.log(all.slice(1,4));
all.reverse;