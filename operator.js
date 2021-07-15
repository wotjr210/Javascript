// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literal: 1 + 2 = ${ 1 + 2 }`);

// 2. Mu  mberic operator
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log( 1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement},counter: ${counter}`);
// counter = counter + 1;
// preIncrement = counter
const postIncrement = counter++;
console.log(`preIncrement: ${preIncrement},counter: ${counter}`);
// postIncrement = counter;
// counter = counter + 1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operaotrs
console.log(10 < 6); // less than
console.log(10 <= 6); // less then or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// true 나오는순간 연산이 종료되므로, 연산을 많이하는 함수나 표현식을 제일 앞에 두면 비효율적.

// && (and), finds the first falsy value
console.log(`or: ${value1 || value2 || check()}`);
// false 나오는순간 연산이 종료.

//nullableObject && nullableObject.someting
if(nullableObject != null) {
    nullableObject.something;
}

function check() {
    for(let i = 0 ; i < 10 ; i++){
        console.log('###');
    }
    return true;
}

// ! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const numberFive = '5';

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const lee1 = { name : 'lee'};
const lee2 = { name : 'lee'};
const lee3 = lee1;
console.log(lee1 == lee2); // false
console.log(lee1 === lee2); // false
console.log(lee1 === lee3); // true 

console.log( 0 == false); // true
console.log( 0 === false); // false
console.log( '' == false); // true
console.log( '' === false); // false
console.log( null == undefined); // true
console.log( null === undefined); // false

// 8. Conditional operators: if
const name = 'df';
if(name === 'lee') {
    console.log('lee');
}else if(name === 'kim'){
    console.log('kim');
}else{
    console.log('seok');
}

// 9. Ternary operators: ?
// condition ? value1 : value2;
console.log( name === 'ellie' ?  'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE' :
        console.log('go away!');
        break;
    case 'Chrome' :
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop
// do while loop
// for loop
// break , continue


