// object shorthand assignment

let name = "yeon";
let age = 26;

// let person = {
//   name: name,
//   age: age,
// };

// key와 value의 값이 일치한다면 다음과 같이 줄여써도 된다.

let person = {
  name,
  age,
};

console.log(person);
