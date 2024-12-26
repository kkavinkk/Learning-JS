// var<--(Do not use), let, const

//Strings, Numbers, boolean, null, undefiened, Symbol,-(not important)

//const name = 'Jhon';
//const age = 30;

// Concatenation
//console.log('mY NAME IS' + name + 'NAME AND i AM AGE' + age);
// template string
//const hello = `My name is ${name} and I am ${age}`;

/*
multiline comments
*/

// Arrays - varables that hold multiple values
/*
const fruits = ['apples', 'oranges', 'pears', 10, true];
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strwaberries');
fruits.pop();
console.log(Array.isArray('hello'));
console.log(fruits.indexOf('organes'));
console.log(fruits);
*/

/*
const person = {
    firstName: 'Jhon',
    lastName: 'Doe',
    Age: 10,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        strea: '50 main st',
        city: 'boston',
        state: 'MA'
    }
}
person.email = 'jhon@gmail.com';
console.log(person);
*/
/*
const todos = [
    {
        if: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        if: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        if: 3,
        text: 'Denstist appointment',
        isCompleted: false
    },
];

// convert to JSON -> const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);

// For
//for(let todo of todos) {
//    console.log(todo.text);
//}
// While
/*
let i = 0;
while(i < 10){
    console.log(`While Loop Numbers ${i}`);
    i++;
}
*/

// forEach, map, filter
/*
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoCompleted);
*/
/*
const x = 6;
const y = 11;

if(x > 5 && y > 10) {
    console.log('x is more than 5 or y is more than 10');
}
*/
/*
const x = 11;

const color = 'green';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color us not red or blue');
        break;
}
*/
/*
//Constrructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
*/
/*
// Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);  
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('Jhon', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);
*/

// Single element
//console.log(document.getElementById('my-form'));
//console.log(document.getElementById('h1'));


// Multiple element
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByTagName('li'));

//const ul = document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h4>Hello</h1>';

/*
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form')
    .style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items')
    .lastElementChild.innerHTML = '<h1>Hello</h1>';

});
*/

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)
{
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`
            ${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}