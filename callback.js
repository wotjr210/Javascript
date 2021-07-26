'use strict'

// JavaScript is synchronous.
// Exectue the code block by order after hoisting
// hoisting : var, function declaration
 
console.log('1');
setTimeout( () => console.log('2') , 1000);
console.log('3');

// Syncronous callback
function printImmedaitely(print) {
    print();
}
printImmedaitely( () => console.log('hello') );

// ASyncronous callback 
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay( () => console.log('async callbak') , 2000);

// Callback Hell example
class UserStorage {
    loginUser( id, password, onSuccess, onError ) {
        setTimeout( ()=> {
             if( (id === 'lee' && password === 'dream') || (id === 'young' && password === 'accademy') ) {
                onSuccess(id);
             }else{
                 onError( new Error('not found'));
             }
        }, 2000)
    }

    getRoles( user, onSueccess, onError) {
        setTimeout( () => {
            if( user === 'lee') {
                onSueccess( { name : 'lee' , role : 'admin'})
            } else {
                onError( new Error('no access'));
            }
        }, 1000)
    }
}


  const userStorage = new UserStorage();
  const id = prompt('enter ur id');
  const password = prompt('enter ur password');
  userStorage.loginUser(
      id, 
      password, 
      (user) => {
        userStorage.getRoles(
            user, 
            (userwithRole) => {
                alert(`Hello ${userwithRole.name},  you hava a ${userwithRole.role} role` );
            }, 
            (error) => {
                console.log(error);
            }
        );
    }, 
    (error) => {
      console.log(error);
    }
);

// 문제점
// 1. 가독성이 떨어짐.
// 2. 에러 발생시, 분석및 디버깅 처리 하기 어려움.
// 3. 유지보수 어려움.