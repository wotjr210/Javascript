'use strict'
// Promis is a Javascript object for aynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created , the excuted runs automatically.
const promise = new Promise( (resolve, reject ) => {
    // doing some hevy work (network, fi les)
    console.log('doing somting...');

    setTimeout( () => {
        // resolve('lee');
        reject(new Error('no network'));
    }, 2000)
});

// 2. Consumers : then, catch, finally
promise //
    .then((value)=>{ // resovle callback에서 전달된 파라미터..
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally')
});

// 3. Promise chaining
const fetchNumber = new Promise( (resovle, reject) => {
    setTimeout( () => resovle(1), 1000);
});

fetchNumber
.then( num => num*2 )
.then( num => num*3 )
.then( num => { // 값을 바로 전달해도되고, 또 다른 Promise를 전달가능함.
    return new Promise( (resolve , reject) => {
        setTimeout( () => resolve(num-1) ,1000);
    });
})
.then( num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise( (resolve, reject) => {
        setTimeout( () => resolve('닭'),1000);
    });

const getEgg = hen => 
    new Promise( (resolve, reject) => {
        //setTimeout( () => resolve(`${hen} => 달걀`),1000);
        setTimeout( () => reject(new Error(`error! ${hen} => 달걀`)),1000);
    });

const cook = egg => 
    new Promise( (resolve, result) => {
        setTimeout( () => resolve(`${egg} => 계란`),1000);
    });

// getHen()
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));

// callback 함수를 전달시, 받아온 value를 다른 함수로 하나로 전달할때 생략이 가능함.
getHen() //
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);

// 5.


