console.log("Hello World");
//let, const
//let allows to change values
//const is with constant value and must be initialized when declaring


let age=300;
let name = "Vykintas";
const isCool = true;
const rating = 4.5;
const y = undefined;
age = 19;
console.log("My name is " + name + " and I am " + age);
console.log(`My name is ${name} and I am ${age}`);
const s = `Hello World`;
const arr = 'technology, computers, it, code';
console.log(arr.split(', '));

// Arrays 

const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 3, true];
console.log(numbers);
console.log(fruits);
fruits.push("mango");
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf('oranges'));

// Objects

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies:['music', 'movies', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.address.city);
const {firstName, lastName, address: {city}} = person;
console.log(firstName);
console.log(city);

person.email = "john@gmail.com";
console.log(person);

const todos = [
{
    id: 1,
    text: 'take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist',
    isCompleted: false
}
];

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);


// Loops

for(let i =0; i< 10; i++){
    console.log(i);

}

for(let todo of todos)
{
    console.log(todo.text);
}

//forEach, map, filter, filter

todos.forEach(function(todo) {
console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;

});

console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;

}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted);

// conditional

const x = '10';

///=== means same type || == for everything

if(x==='10')
{
    console.log("x is 10");
}
else{
    console.log(`x is not`)
}

const z=10;

const color  = z > 10 ? 'red' : 'blue';

console.log(color);

// functions

function addNums(num1, num2){
    console.log(num1 + num2);
}

const multiplyNums = (num1, num2) => {
    console.log(num1 * num2);
}

addNums(5,4);
multiplyNums(5,4);

// OOP
// Constructor
/*
function Person(firstName, lastName, dob)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
    return this.firstName +' ' + this.lastName;
}
*/
//Class

class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
    getBirthYear()
    {
        return this.dob.getFullYear();
    }
    getFullName(){
        return this.firstName +' ' + this.lastName;
    }
}


//Instatiate



const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);
console.log(person1.firstName);
console.log(person1.dob.getFullYear());
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// DOM