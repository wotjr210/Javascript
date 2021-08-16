/**
 * Ternary Operator
 */

// Bad Code
function getResult(score) {
    let result;
    if (score > 5) {
      result = '👍';
    } else if (score <= 5) {
      result = '👎';
    }
    return result;
  }
  
  // Good Code
  function getResult(score) {
    return score > 5 ? '👍' : '👎';
  }
  
  console.log(getResult(6));
  console.log(getResult(5));

/**
 * Nullish coalescing operator
 */

// Bad Code
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
      message = 'Nothing to display';
    }
    console.log(message);
  }
  
  // Good Code
  function printMessage(text) {
    // 왼쪽코드가 null/undifined인경우,  오르쪽 코드 실행.
    const message = text ?? 'Nothing to display';
    console.log(message);
  }
  printMessage('Hello'); // Hello
  printMessage(null); // Nothing to display
  printMessage(undefined); // Nothing to display

  // Default parameter is only for undefined
  function printMessage(text = 'Nothing to display') {
    console.log(text);
  }
  printMessage('Hello'); // Hello
  printMessage(null); // null
  printMessage(undefined); // Nothing to display
  
  // Logical OR operator ||
  function printMessage(text) {
    // 왼쪽 코드가 false인 경우에만, 오른쪽 코드가 살행됨.
    const message = text || 'Nothing to display';
    console.log(message);
  }
  printMessage('Hello'); // Hello
  printMessage(null); // 'Nothing to display'
  printMessage(undefined); // 'Nothing to display'
  printMessage(0); // 'Nothing to display'
  printMessage(''); // 'Nothing to display'

  const result = getInitialState() ?? fetchFromServer();
  console.log(result);
  
  function getInitialState() {
    return null;
  }
  function fetchFromServer() {
    return 'Hiya from';
  }
  

/**
 * Object Destructuring
 */

 const person = {
    name: 'Julia',
    age: 20,
    phone: '0107777777',
  };
  
  // Bad Code
  function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
  }
  
  // Bad Code
  function displayPerson(person) {
    const name = person.name;
    const age = person.age;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
  }
  
  // Good Code
  function displayPerson(person) {
    const { name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
  }

/**
 * Spread Syntax - Object
 */

  const item = { type: '👔', size: 'M' };
  const detail = { price: 20, made: 'Korea', gender: 'M' };
  
  // Bad Code
  item['price'] = detail.price;
  
  // Bad Code
  const newObject = new Object();
  newObject['type'] = item.type;
  newObject['size'] = item.size;
  newObject['price'] = detail.price;
  newObject['made'] = detail.made;
  newObject['gender'] = detail.gender;
  console.log(newObject);
  
  // Bad Code
  const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
  };
  console.log(newObject);
  
  // Good Code
  const shirt0 = Object.assign(item, detail);
  console.log(shirt0);
  
  // Better! Code
  // 기존값은 그대로이고, price만 업데이트됨.
  const shirt = { ...item, ...detail, price: 30 };
  console.log(shirt);


/**
 * Spread Syntax - Array
 */
let fruits = ['🍉', '🍊', '🍌'];

// fruits.push('🍓');
fruits = [...fruits, '🍓'];
console.log(fruits);

// fruits.unshift('🍇');
fruits = ['🍇', ...fruits];
console.log(fruits);

const fruits2 = ['🍈', '🍑', '🍍'];

let combined = fruits.concat(fruits2);
combined = [...fruits, '🍒', ...fruits2];
console.log(combined);


/**
 * Optional Chaining
 */
const bob = {
    name: 'Julia',
    age: 20,
  };
  const anna = {
    name: 'Julia',
    age: 20,
    job: {
      title: 'Software Engineer',
    },
  };
  
  // Bad Code
  function displayJobTitle(person) {
    if (person.job && person.job.title) {
      console.log(person.job.title);
    }
  }
  
  // Good Code
  function displayJobTitle(person) {
    if (person.job?.title) {
      console.log(person.job.title);
    }
  }
  
  // Good Code
  function displayJobTitle(person) {
    const title = person.job?.title ?? 'No Job Yet 🔥';
    console.log(title);
  }
  
  displayJobTitle(bob);
  displayJobTitle(anna);

/**
 * Template Literals (Template String)
 */
const person = {
    name: 'Julia',
    score: 4,
  };
  
  // Bad Code
  console.log(
    'Hello ' + person.name + ', Your current score is: ' + person.score
  );
  
  // Good Code
  console.log(`Hello ${person.name}, Your current score is: ${person.score}`);
  
  // Good Code
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
  
  // Good Code
  function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
  }

 /**
 * Looping
 */ 
const items = [1, 2, 3, 4, 5, 6];

// Bad Code
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// 배열 API는 항상 자기자신을 return
// Good Code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// Good Code
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result); 


 /**
 * Promise -> Async/await
 */ 
// Bad Code
function displayUser() {
    fetchUser() //
      .then((user) => {
        fetchProfile(user) //
          .then((profile) => {
            updateUI(user, profile);
          });
      });
  }
  
  // Good Code
  async function displayUser() {
    const user = await fetchUser();
    const profile = await fetchProfile(user);
    updateUI(user, profile);
  }

/**
 * Quize
 */ 

  // Remove Duplicates!
  // Array 자료구조는 중복을 허용
const array = ['🐶', '🐱', '🐈', '🐶', '🦮', '🐱'];

console.log(array);

// Set 자료구조는 중복을 허용
console.log([...new Set(array)]);