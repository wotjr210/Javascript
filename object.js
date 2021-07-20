// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// Object
// one of the JavaScript`s data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and property
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const lee = { name : 'lee' , age : 30 };
print(lee);

// with JavaScript magic (dynamically typed language), runtime때 타입이 결정됨.
// can add properties later
lee.hasJob = true;
console.log(lee.hasJob);

// can delete properties later
delete lee.hasJob;
console.log(lee.hasJob);

// 2. Computed properties
// ket should be alwats string
console.log(lee.name); // 코딩하는 순간 값을 받아올때.
console.log(lee['name']); // Computed properties , runtime시점에 key값이 결정될때.
lee['hasJob'] = true;
console.log(lee.hasJob);

function printVal(obj , key){
    // console.log(obj.key);
    console.log(obj[key]);
}

printVal(lee, 'name');


// 3. Property value shorthand
const person1 = { name : 'bob1' , age : 1};
const person2 = { name : 'bob2' , age : 2};
const person3 = { name : 'bob3' , age : 3}; // object를 필요할때마다 일일히 만들게되면 동일한 key,value 반복적으로 만들어야됨.
//const person4 = makePerson('bob4',4);
const person4 = new Person('bob4',4);
console.log(person4)
// function makePerson(name , age) {
//     return {
//         name, // name : name , key와value 이름이 동일하면 생략가능함.
//         age
//     };
// }

// 4. Constructor Function
function Person(name , age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check ( key in obh )
console.log('name' in lee); // true
console.log('age' in lee); // true
console.log('random' in lee); // false
console.log( lee.random ); // undifined

// 6. for..in vs for..of
// for(key in obj)
console.clear();
for (key in lee){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4,5];
for( value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ... ])
const user = {name : 'ellie', age : 20};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user){
    user[key] = user[key];
}
console.clear();
console.log(user3)

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue' , size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);