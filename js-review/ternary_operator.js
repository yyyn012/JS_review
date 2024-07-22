// ternary operator(삼항연산자)

let person = { name: "yeon", age: 23 };

if (person) {
  console.log(person.name);
} else {
  console.log("there is no person");
}

console.log(person ? person.name : "there is no person");
