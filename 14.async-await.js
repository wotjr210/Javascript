'use strict'
// 기존의 존재하는 것을 위에 혹은 감싸서 조금더 간편한 API를 제공하는것 syntatic sugar
// ex) prototpye을 베이스로한 syntatic sugar : Javascript class


// async & await
// clear style of using promise :)
// Promise를 조금더 간결하고 간편하고, 동기적으로 실행되는것처럼 보이도록 만들어줌.
// 상황에 맞게 써야됨, 무조건 async/await이 좋은게 아님

// 1. promise
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

// 2. async keyword - 코드 블럭이 자동으로 Promise return.
async function fetchUser() {
	// do network request in 10 secs...
	return 'lee';
}

const user = fetchUser(); // return Promise
user.then(console.log)


// 3. await keyword : async가 붙은 함수 안에서만 사용 가능.
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(1000); // delay가 끝날떄 까지 기다림
	//throw 'error';
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

/**
 * 모든 과일을 가져오는 함수.
 * @returns 
 */
function pickFruits() {
	return getApple()
	.then ( apple => {
		return getBanana().then( banana => `Promise ::: ${apple} + ${banana}`);
	}); // callback 지옥...
}
pickFruits().then(console.log);


async function pickFruits() {
	try{
		const apple = await getApple();
		const banana = await getBanana();
		return `async&await ::: ${apple} + ${banana}`;
	}catch(err) {
		console.error(err);
	}
}

pickFruits().then(console.log)

// 4. await 병렬처리
async function pickFruits() {
	const applePromise = getApple(); // promise를 만들었기때문에, 만들자마자 실행됨.
	const bananaPromise = getBanana ();
             // 동시 다발적으로 다운받는데 가능한경우, 즉 서로의 영향도가 없어 병렬적으로 기능을 수행할수있는경우는 이렇게 더럽게 코딩 ㄴㄴ 아래 참고

	const apple = await applePromise; // 여기서 동기화
	const banana = await bananaPromise;
	return `${apple} + ${banana}`;
}

// 5. useful Promise APIs
function picjAllFruits() {
	// all method :  promise배열을 전달하게되면, 병렬적으로 다 받을때까지 모아줌.
	return Promise.all([getApple(),getBanana()])
	.then(fruits => fruists.join('+')); // 결과값이 배열로 담김
}

picjAllFruits().then(consoel.log);


function pickOnlyOne() {
	return Promose.race([getApple(), getBanana()]); // 가장 먼저 수행되는것 하나만 리턴됨
}
pickOnlyOne().then(console.log);


