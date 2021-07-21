'use  strict'

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undifined
console.log(fruits[fruits.length-1]); // undifined

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0 ;  i < fruits.length ; i++){
    console.log(fruits[i]);
}

// b. for of
for( let fruit of fruits ){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index) );

// 4. Additon, deletion, copy
// push : add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to benigging
fruits.unshift('딸기','오렌지');
console.log(fruits);

// shift : remove an tiem from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower pop, push
// 뒤에서부터 지우고 넣기때문에 기존에 것들은 건들이지 않지만,
// 앞에서 데이터를 넣고 빼게되면 기존의 데이터들이 계속 움직여야하기떄문에.

// splice : remove an item by index position
fruits.push('딸기','복숭아','오렌지');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'사과','수박'); // (1,0,'사과','수박') 지우지않고 추가
console.log(fruits);

// combine two arrays
const fruit2 = ['배','모과'];
const newFruits = fruits.concat(fruit2);
console.log(fruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과')); // 0
console.log(fruits.indexOf('수박')); // 2
console.log(fruits.includes('수박')); // true

// includes
console.log(fruits.includes('코코넛')); // false
console.log(fruits.indexOf('코코넛')); // -1

// lastIndexOf
console.clear();
console.log(fruits);
console.log(fruits.lastIndexOf('사과')); // 1
