'use strict'
// Promis is a Javascript object for aynchronous operation.
// 1. State : pending -> fulfilled or rejected
// 2. Producer vs Consumer

// 1. Producer
// when new Promise is created , the excuted runs automatically.
// 불필요한 네트워크 통신이 생길수도 있으므로, 항상 염두하자..
const promise = new Promise( (resolve, reject ) => {
    // doing some hevy work (network, file)
    // 비동기로 처리하지않으면, 다음라인의 코드가 실행되지않으므로 시간이 오래걸림.
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

// 4. Error Handling , 오류를 잘 처리하자.
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
// 
getHen() //
.then(getEgg)
.catch(error => {
    return '빵';
})
.then(cook)
.then(console.log)
.catch(console.log);




