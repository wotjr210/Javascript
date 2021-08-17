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
function printMessageA(text) {
  // 왼쪽코드가 null/undifined인경우,  오르쪽 코드 실행.
  const message = text ?? 'Nothing to display';
  console.log(message);
}
printMessageA('Hello'); // Hello
printMessageA(null); // Nothing to display
printMessageA(undefined); // Nothing to display

// Default parameter is only for undefined
function printMessageB(text = 'Nothing to display') {
  console.log(text);
}
printMessageB('Hello'); // Hello
printMessageB(null); // null
printMessageB(undefined); // Nothing to display

// Logical OR operator ||
function printMessageC(text) {
  // 왼쪽 코드가 false인 경우에만, 오른쪽 코드가 살행됨.
  const message = text || 'Nothing to display';
  console.log(message);
}
printMessageC('Hello'); // Hello
printMessageC(null); // 'Nothing to display'
printMessageC(undefined); // 'Nothing to display'
printMessageC(0); // 'Nothing to display'
printMessageC(''); // 'Nothing to display'

const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from';
}
