class Counter {
    // constructor(runFive : function?) { typescript에서 optional variable
    constructor(runFive) {
        this.counter = 0;  // Counter clss 내에는 counter변수가 있고, class를 object로 만드는 순간 counter는 0으로 초기화돤다.
        this.callback = runFive;
    }

    // increase(runFive) {
    //     this.counter++;
    //     console.log(this.counter);
    //     if(this.counter % 5 === 0) {
    //         runFive(this.counter);
    //     }
    // }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 === 0) {
            // if(this.callback) { 
            //     this.callback(this.counter);
            // }
            this.callback && this.callback(this.counter);
        }
    }
}

//const coolCoubter = new Counter();
// const coolCoubter = new Counter(printSometing);

function printSometing(num) {
    console.log(`yo! ${num}`); 
}

function alertNum(num) {
    alert(`yo! ${num}`); 
}
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(printSometing);
// coolCoubter.increase(alertNum);
// 함수를 사용할때마다 파라미터로 함수명을 넘겨줘야하는 불편함이있음..

// const coolCoubter = new Counter(); //  Uncaught TypeError: this.callback is not a function
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();
// coolCoubter.increase();

const printCounter = new Counter(printSometing);
const alertCounter = new Counter(alertNum);

// 정리 : 가능하면 Class를 하나의 완전체를 만들기 보다는 원하는 기능을 끼워넣어서 재조립이 가능하도록 만들자!.