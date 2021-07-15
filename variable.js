// 1. Use strict
// typescript에서는 선언한 필요 없음.
// Javascript is very flexible.
// flexible === dengerous
// added ECMAScript5
// Javascript egnine이 더빠르고 효율적으로 분석할 수 있기때문에, 조금더 나은 성능개선.
'use strict'


// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
// global variable을 application이 실행되는 순간부터 종료까지 항상 메모리에 탑재되므로, 최소한으로 사용하자.
{ // block scope
    let name = 'jaeseok';
    console.log(name);
    name = 'jeayoung';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting ( 어디에 선언되었는지 상관없이, 항상 제일위로 선언을 끌어올려주는것.)
// has no block scope
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
//use const whenever posiible.
//only use let if variable needs to change.

const daysInWeek = 7;
const maxNumber = 5;

//Note!
//Immutable data types : primitive types, frozen objects (i.e. object.freeze())
//Mutalbe data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons : 
// - security
// - thread safety
// - reduce human mistake

// 4. Variable types
// primitive , single item : number , string, boolean , null, undefined, symbol 값 자체가 메모리에 저장
// object, box container object를 가리키는 레퍼런스가 메모리에 저장
// function, first-class function : function도 data tpye처럼 변수에 할당이 가능하고, function의 인자로도 전달이 가능하고,function에서 return type으로도 가능.

const cnt = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${cnt}, type: ${typeof cnt}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negaInfinity = -1 / 0;
const nAn = 'abc' / 2;
console.log(infinity);
console.log(negaInfinity);
console.log(nAn);

// bigInt ( fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // chrome , firefox만 지원..
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan'
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals(string) , backtick 
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false : 0 , null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // flase
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null , 빈값으로 지정
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

// undefined , 정해지지않은 변수
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifier for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// 동일한 id로 symbol을 만들었지만, 다름
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true;
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // string 출력시, 반드시 .description

// 5. Dynamic typing : dynamically type language, runtime시에 할당된 값에따라 type 변경 가능함.
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`); 
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 5;
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error