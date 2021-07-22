// JSON
// Javasvript Objedct Notation

// 1. Obejct to Json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple','banana']);
console.log(json);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    // symbol : Symbol('id'), 
    jump : () => console.log(`${name} can jump!`)   // x
}
console.clear();
json = JSON.stringify(rabbit, ['name','color','size']);
json = JSON.stringify(rabbit, (key,value) => {
    console.log(` key : ${key} , value : ${value}`);
    return key === 'name' ? 'lee' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(` key : ${key} , value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); error : JSON으로 변환시 function은 사라지고 다시 JSON변환하면 없어지기때문에..

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // error : Sting 이기때문에 

// JSON Diff checker http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/json-validator/