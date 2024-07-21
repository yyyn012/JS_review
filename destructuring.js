// Destructuring

let person = {
  name: "hyeyeon",
  age: 26,
};

// let name = person.name;
// let age = person["age"];

// 위의 두 줄은 다음 한 줄로 줄여 쓸 수 있다.

let { name, age } = person;
// person이라는 변수에 있는 name과 age의 값을 빼내서 console.log에 전달한다.

console.log(name, age);

// 두 번째 예시 ----------------------------------------

let array = [1, 2, 3, 4];

// let [a, b] = array;
// array에 있는 첫 번째, 두 번째 값을 a, b에 담는다.

let [a, b, ...rest] = array;

// rest 파라미터 문법(Rest Parameter, 나머지 매개변수)으로,  매개변수 이름 앞에 세개의 점 ...을 붙여서 정의한 매개변수를 의미한다.
// 함수에 전달된 인수들은 순차적으로 파라미터와 Rest 파라미터에 할당된다.

console.log(rest);
// 1, 2를 제외한 나머지 값인 [3, 4]가 묶여서 출력된다.
