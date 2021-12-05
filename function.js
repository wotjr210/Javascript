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

/** 
*  Arrow funtion에 없는것 : 함수이름, this, arguments
*  1. 함수이름이 없다 - 익명함수
*  2. this가 없다 - 기존의 함수는 bind,apply등을 통해 this를 주입할수 있다. 하지만, 화살표 함수에는 this가 없기때문에 bind로 연결해줄  this가 없다.
*  3. arguements가 없다.
* 
* 코드가 줄어드는 장점
*  this를 바인딩 하지 않아도 선언된 위치의 바깥쪽 this를 접근 할 수 있다.
*/

// this
const btn = document.getElementById('btn');

var myObj = {
    count : 3,
    setCounter : function() {
        console.log(this.count);
        btn.addEventListener('click', (function() {
            console.log(this); // 'button' => 버튼이 클릭이 되었을때 호출이 되므로...
        }).bind(this)); // 함수를 한번 감싼후 bind() 처리하여 this를 묶어 주면 'myObj'로 변경된다.

        btn.addEventListener('click', () => {
            console.log(this);
        });
        // 하지만, 화살표 함수에는 this가 없기때문에 bind로 연결해줄  this가 없다. 스코프에 의해 setCounter의 this를 사용하게 된다.
    }

}
// this는 호출하는 방법에 의해 결정이 된다!!!
myObj.setCounter(); // 'myobj'

const MyClass = funtion() {}
new MyClass();

// 클래스의 생성자 this라는 오브젝트가 생성이 되는데 화살표 함수에는 없기떄문에 생성자로서 사용할 수가 없고 또한 프로토타입이 존재하지 않는다.
const MyClass2 = () => {};
new MyClass2();

// arguments
const myFunc = function() {
    console.log(arguments); // 파라미터를 배열처럼 하나씩 접근할 수있는 arguments속성, 배열은 아님
}
myFunc(1,2,3,4);

const myFunc2 = () => {
    console.log(arguments); // Uncaught ReferenceError : arguments is not defined.
}
myFunc2(1,2,3,4);

// 그렇다면 파라미터로 각각 하나씩 a,b,c,d로 받아와야 할까??? => ES6문법을 이용한 처리, 이것은 실제 배열로 떨어짐.
const myFunc4 = (...args) => {
    console.log(args);
}
myFunc4(1,2,3,4);




function outer() {
    const myFunc3 = () => {
        console.log(arguements); // Arguments(4)
        /* 화살표 함수이므로 자신은 rguments가 없지만, 
        스코프 체인으로 인해 함수가 선언된 위치에 함수 ounter가 실행되는 컨텍스트에서 스코프를 참조하게 된다.*/
    }
    myFunc3();
}
outer(1,2,3,4);



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