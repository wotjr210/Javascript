/**
 * Optional Chaining
 * 참조가 nullish (null 또는 undefined)이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 undefined
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
function displayJobTitleA(person) {
  if (person.job && person.job.title) {
      console.log(person.job.title);
  }
}

// Good Code
function displayJobTitleB(person) {
    if (person.job?.title) {
        console.log(person.job.title);
    }
}
displayJobTitleB(bob);  
displayJobTitleB(anna); // Software Engineer

// Good Code
function displayJobTitleC(person) {
    
    const title = person.job?.title ?? 'No Job Yet 🔥';
    console.log(title);
}

displayJobTitleC(bob); // No Job Yet 🔥
displayJobTitleC(anna); // Software Engineer
