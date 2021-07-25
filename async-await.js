'use strict'
// 기존의 존재하는 것을 위에 혹은 감싸서 조금더 간편한 API를 제공하는것 syntatic sugar
// ex) prototpye을 베이스로한 syntatic sugar : Javascript class

// async & await
// clear style of using promise :)

// 1. async
function fetchUser() {
	// do network request in 10 secs...
	// return 'lee';

	return new Promise((resolve, reject) => {
		//return 'lee'; // resolve or reject를 호출하지 않았기때문에 promise state pending, 반드시 Promise내부에서 resolve나 reject를 호출해야함.
		resolve('lee');
	)
}

const user = fetchUser(); // return Promise
user.then(console.log)
console.log(user);

// 1. async 자동으로 코드 블럭이 Promise로 변경됨..
async function fetchUser() {
	// do network request in 10 secs...
	// return 'lee';
}

const user = fetchUser(); // return Promise
user.then(console.log)
console.log(user);

// 2. await : async keyword가 붙은 함수내에서만 사용 가능
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(2000); // delay가 끝날떄 까지 기다림
	throw 'error';
	return '사과';
}

async function getBanana() {
	await delpay(1000);
	return '바나나';
}

// 동일하게 Promise로 만들면
//function getBanana() {
//	return delay(3000)
//	.then( ()=> 'banana' );
//}

function pickFruits() {
	return getApple()
	.then ( apple => {
		return getBanana().then( banana => `${apple} + ${banana}`);
	}); // callback 지옥...
}
pickFruits().then(console.log);


function pickFruits() {
	try{
		const apple = await getApple();
		const banana = await getBanana();
		return `${apple} + ${banana}`;
	}catch() {
	}
}

pickFruits().then(console.log)

// await 병렬처리
async function pickFruits() {
	const applePromise = getApple(); // promise를 만들었기때문에, 만들자마자 실행됨.
	const bananaPromise = getBanana ();
             // 동시 다발적으로 다운받는데 가능한경우, 즉 서로의 영향도가 없어 병렬적으로 기능을 수행할수있는경우는 이렇게 더럽게 코딩 ㄴㄴ 아래 참고

	const apple = await banana; // 여기서 동기화
	const banana = await getBanana;
	return `${apple} + ${banana}`;
}

// 3. useful Promise APIs
function picjAllFruits() {
	return Promise.all([getApple(),getBanana()])
	.then(fruits => fruists.join('+')); // 결과값이 배열로 담김
}

picjAllFruits().then(consoel.log);


function pickOnlyOne() {
	return Promose.race([getApple(), getBanana(])); // 가장 먼저 수행되는것 하나만 리턴됨
}

pickOnlyOne().then(console.log);

// callback-to-promise.js를 aync과 await으로 만들기
