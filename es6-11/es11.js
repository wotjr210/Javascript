/**
 * Optional Chaining (ES11)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
 */
 {
    const person1 = {
      name: 'Lee',
      job: {
        title: 'S/W Engineer',
        manager: {
          name: 'Bob',
        },
      },
    };
    const person2 = {
      name: 'Bob',
    };
  
    {
      function printManager(person) {
        console.log(person.job.manager.name);
      }
      printManager(person1);
      // printManager(person2);
    }
  
    {
      function printManager(person) {
        console.log(
          person.job
            ? person.job.manager
              ? person.job.manager.name
              : undefined
            : undefined
        );
      }
      printManager(person1);
      printManager(person2);
    }
  
    {
      function printManager(person) {
        console.log(person.job && person.job.manager && person.job.manager.name);
      }
      printManager(person1);
      printManager(person2);
    }
  
    // ES11
    {
      function printManager(person) {
        console.log(person.job?.manager?.name);
      }
      printManager(person1);
      printManager(person2);
    }
    console.clear();
  }
  
  /**
   * Nullish Coalescing Operator (ES11)
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
   */
  {
    // Logical OR operator
    // false: false, '', 0, null, undefined
    {
      const name = 'lee';
      const userName = name || 'Guest';
      console.log(userName);
    }
  
    {
      const name = null;
      const userName = name || 'Guest'; // 기본적인 값을 할당하도록 or 연산자를 사용하는데, 버그 아래 참조
      console.log(userName);
    }
    
    // 버그1, 사용자 수준에서 빈값을 넣어도 Guest로 출력됨.
    { 
      const name = ''; 
      const userName = name || 'Guest';
      console.log(userName);
        
      // 버그2, 사용자 수준에서 0을 넣어도 undefined 출력됨.
      const num = 0;
      const message = num || 'undefined';
      console.log(message);
    }
  
    // ES11
    {
      const name = '';
      const userName = name ?? 'Guest'; // name이란 변수에 값이 있으면 name, 없다면 'Guest'
      console.log(userName);
  
      const num = 0;
      const message = num ?? 'undefined';
      console.log(message);
    }
  }