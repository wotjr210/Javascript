/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */

{
    const lee1 = {
        name : 'Lee',
        age : '30'
    };

    const name = 'Lee';
    const age = '30';

    const lee2 = {
        name : name,
        age : age
    };

    // ES6 ,Key와 Value가 동일한경우, 생략이 가능하다.
    const lee3 = {
        name,
        age
    };

     console.log(lee1, lee2, lee3);
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

{
    // object
    const student = {
        name : 'Anna',
        level : 1,
    }

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    // ES6
    {
        const { name, level , age } = student; // student에 있는 key와 value들이 name, level맞게 출력.
        console.log(name, level , age); // Anna 1 undefined

        // 만약 다른이름으로 선언하고 싶다면??
        const { name : studentName , level : studentLevel } = student;
        console.log(studentName, studentLevel); // Anna 1
    }

    // array 
    const animals = ['강아지','고양이'];

    {
        const first = animals[0];
        const second = animals[1];
        console.log(first, second);
    }

    // ES6
    {
        const [first, second] = animals;
        console.log(first, second);
    }

}

/**
 * Spread Syntax 
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

{
    const obj1 = {key : 'key1'};
    const obj2 = {key : 'key2'};
    const arr = [obj1,obj2];

    // array copy
    const arrCopoy = [...arr]; // object가 참조하는 refrence를 복사해옴.
    console.log(arr, arrCopoy);

    const arrCopoy2 = [...arr,{key : 'key3'}];

    obj1.key = 'newKey';
    console.log(arr, arrCopoy, arrCopoy2);

    // obejct copy
    const obj3 = {...obj1 };
    console.log(obj3);

    // array concatentation
    const fruits1 = ['오렌지', '딸기'];
    const fruits2 = ['바나나', '키위'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    // object merge
    const dog1 = { dog : '소형견'};
    const dog2 = { dog : '대형견'};
    const dog = {...dog1,...dog2};
    console.log(dog);
    // 주의할점. key가 동일한 object를 병합한다면 뒤에게 덮어버림...

    /**
     * Default parameters
     * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
     */


  {
    function printMessage(message) {
      if (message == null) {
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }

  // ES6
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }

    printMessage('hello');
    printMessage();
  }
  console.clear();
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
 {
    const isCat = true;
    
    {
      let component;
      if (isCat) {
        component = '😸';
      } else {
        component = '🐶';
      }
      console.log(component);
    }
  
    // ES6
    {
      const component = isCat ? '😸' : '🐶';
      console.log(component);
      console.log(isCat ? '😸' : '🐶');
    }
    console.clear();
  }


  /**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
    const weather = '🌤';
    const temparature = '16°C';
  
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
  
    // ES6
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
  
  }