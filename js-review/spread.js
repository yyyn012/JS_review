// Spread

let person = { name: "yeon", age: 30 };

let person2 = { ...person };
let person3 = person;

console.log(person2);
console.log(person3);

// person2와 person3의 결과도 같고 두 코드 모두 person을 참조했지만 두 코드의 복사방법은 다르다.

//  rest 파라미터법을 쓴 person2는 실제로 하나의 객체를 생성하여 그 안에 person을 복사했고,
// person3는 객체의 주소값만 복사(즉 객체는 하나이고 그 객체를 참조하는 변수가 두 개)한 것이다.

console.log(person == person2);
// false

console.log(person == person3);
// true
