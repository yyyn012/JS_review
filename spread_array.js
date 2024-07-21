// Spread - Spread 방식(...)은 배열에도 적용된다.

let a = [1, 2];
let b = [...a, 3];

console.log(b);
// [1, 2, 3]

// 위와 같이 a를 복사하여 새로운 객체를 만든 b에 새로운 값을 추가할 수 있다.

let c = [...a, ...b];
console.log(c);
// [1, 2, 1, 2, 3]

// ---------------------------------------------------

// 앞 예시에서도 새로운 값을 추가하거나 기존 값을 변형할 수 있다.
let person = { name: "yeon", age: 30 };

let person2 = { ...person, name: "jimin" };

console.log(person2);
//{name : "jimin", age : 30}
// 객체 생성 및 복사 후 기존 값을 변형했다.
