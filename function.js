// Function
// - fundametal building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1 , param2) { body... return; }
// one function === one thing
// naming : doSomthing, command, verb
// e.g. createCardAndPoint -> createCard , cratePoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(msg) {
    console.log(msg);
}
log('Hello@');

// 2. Parameters
// premitive parameters : pass by value
// object parameters : pass by reference
function changeNm(obj) {
    obj.name = 'coder';
}

const jeasoek = { name : 'jeaseok'} ;
changeNm(jeasoek);
console.log(jeasoek);

// 3. Default parameters (added in ES6)
function showMessage(msg , from = 'unknown'){
    // ES6 이전에는 아래와 같이 항상 체크 해야됨.
    // if( from === undefined ){
    //     from = 'unknown';
    // }
    console.log(`${msg} by ${from}`);
}
showMessage('Hi!'); 

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    // for( let i = 0 ; i < args.length ; i++) {
    //     console.log(args[i]);
    // }

    // for( const arg of args) {
    //     console.log(arg);
    // }

    args.forEach((arg) => console.log(arg));
}
printAll('lee', 'jae', 'seok');

// 5. Local scope
let glbalMsg = 'global'; // global variable
function printMsg(){
    let msg = 'hello';
    console.log(msg);
    console.log(glbalMsg);
    function printAother() {
        console.log(msg);
        let childMsg = 'hello';
    }
    //console.log(childMsg); // error
}
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

// 6. Return a value
function  sum( a , b) {
    return a + b;
}
const result = sum(1, 2);
console.log(` sum : ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if(user.point > 10){
        // long upgrade logic
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;       
    }
    // long upgrade logic
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be returned by another function

// 1. Function expresstion
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
//printA(); // error , var 또는 named finctuin으로 처리하면 hoisted
const printA = function () {// anonymous function
    console.log('print');
};
//print();
const printAgain = printA;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer , printYes, printNo) {
    if(answer === 'love you') {
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYess = function () {
    console.log('yes!');
};

// named finction
// better debugging in debugger`s stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print(); call stack size exceeded
};

randomQuiz('wrong', printYess, printNo);
randomQuiz('love you', printYess, printNo);

// Arrow funtion
// always anonymous
// const simplePrint = function() {
//  console.log('simplePrint!');    
//};

const simplePrint = () => console.log('simplePrint!');
simplePrint();
const add = (a , b) => a + b;
const simpeMuliply = (a , b) => {
    return a*b;
};
// { } 키워드를 사용하게되면 좀더 반드시 return

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

const calculate = ( command , a = 10 , b = 2) => {
    let result = 0;
    switch(command){
        case 'add' : 
            result = a+b;
            break;
        case 'substract' :
            result = a-b;
            break;
        case 'divide' :
            result = a/b;
            break;
        case 'multiply' :
            result = a*b;
            break;    
        case 'remainder' :
            result = a%b;
            break;
        default :    
            console.log(`don't exist command : ${command}`);
    }
    return result;
    
}

const calculate2 = ( command , a = 10 , b = 2) => {
    switch(command){
        case 'add' : 
            return a+b;
        case 'substract' :
            return a-b;
        case 'divide' :
            return a/b;
        case 'multiply' :
            return a*b;
        case 'remainder' :
            return a%b;
        default :    
            throw Error(`unkown comman : ${command}`);
    }
}