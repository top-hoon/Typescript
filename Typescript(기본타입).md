## 타입스크립트란
 - 타입스크립트는 자바스크립트에 타입을 부여한 언어
 - 타입스크립트는 자바스크립트와 달리 브라우저에서 실행하려면 파일을 한번 변환해주어야함 이 변환 과정을 컴파일이라고 부름

## 왜 써야할까
 1. 에러의 사전방지
````js
// math.js
function sum(a, b) {
  return a + b;
}
````ts
// math.ts
function sum(a: number, b: number) {
  return a + b;
}
````
 - 두 코드 모두 두 숫자의 합을 이용하는 함수인데 js로 하면 이렇게됨
````js
sum(10, 20); // 30
sum('10', '20'); // 1020
````
 - 두번째는 1020 이 나와버림
 - ts로 할 경우에는 문자열을 넣어줄경우 number가 아니라서 error를 만날수 있게됨!

 2. 코드 자동 완성과 가이드
 - 너무좋음 js 는 자바스크립트 Number에서 제공하는 API인 을 일일이 작성했습니다. 만약에 오타라도 나게되면 이 파일을 브라우저에서 실행했을 때만 오류를 확인할 수 있었을것
 - 하지만 타입스크립트는 타입이 정해져 있기 때문에 number가 아니면 지정했던 type에 대한 api를 미리 볼 수 있기 떄문에 자동완성과 오타를 방지 할 수있는 장점이 있다.


##타입스크립트 기본타입
### 문자열, 숫자형, 불리언, 
````ts
let str: string = 'hi';
let str: string = 'hi';
let isLoggedIn: boolean = false;
````
### 배열
````ts
let arr: number[] = [1,2,3]
let arr: Array<number> = [1,2,3];   // 제네릭을 사용할 수도 있음
````
### 튜플
 - 튜플은 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열 형식을 의미
````ts
let arr: [string, number] = ['hi', 10]; -> string number로 들어가야함
arr[1].concat('!'); // Error, 'number' does not have 'concat'
arr[5] = 'hello'; // Error, Property '5' does not exist on type '[string, number]'. // 정의하지 않은 타입, 인덱스로 접근할 경우 오류 만남
````
### 열겨형(enum)
 - 이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다.
````ts
enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;

enum Avengers { Capt, IronMan, Thor } // 인덱스 번호로도 접근가능
let hero: Avengers = Avengers[0];

enum Avengers { Capt = 2, IronMan, Thor } // 인덱스 번호 변경도 가능
let hero: Avengers = Avengers[2]; // Capt
let hero: Avengers = Avengers[4]; // Thor
````
### any
 - 단어 의미 그대로 모든 타입에 대해서 허용한다는 의미를 갖고 -> 자바스크립트로 되어있는거를 타입으로 바꿀 때 활용하면 좋음
````ts
let str: any = 'hi';
let num: any = 10;
let arr: any = ['a', 2, true];
````
### Void
 - 변수에는 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입 -log 만 반환하거나 할 때 사용
````ts
let unuseful: void = undefined;
function notuse(): void {
  console.log('sth');
}
````
### Never - error 반환하거나, 무한루프 돌릴때 사용
````ts
// 이 함수는 절대 함수의 끝까지 실행되지 않는다는 의미
function neverEnd(): never {
  while (true) {
  }
}
````
### union - String number 둘 다 가능
````ts
let name : string | number = 'top';
````

### type이 길 때 이런식으로도 가능 type은 왠만하면 첫 글자 대문자로 ㄱㄱ
````ts
let type = string | number
let name : type = 'top';
````

### object 
 - 1. property를 사용해서 객체를 표현하고자 할 때는 interface 사용해야함
````ts
let user :object

user ={
 name: 'xx',
 age : 30
}
console.log(user.name) -> error object에는 name이 없다고 뜸 property를 사용해서 객체를 표현하고자 할 때는 interface 사용해야함


interface User ={
 name: 'xx';
 age : 30;
 gender? : string;
}

let user: User ={
 name: 'xx',
 age : 30
}
console.log(user.name) ok
````
 - 2. 객체에 속성 추가하려면 이런식으로 인터페이스에 추가해준다. 대신 있어도 되고 없어도 되게끔 ? 사용했음 대신 type은 맞춰서 넣어주어야함
````ts
user.gender = "male" -> error 발생

interface User ={
 name: 'xx';
 age : 30;
 gender? : string;
}

let user: User ={
 name: 'xx',
 age : 30
}
````

````ts
interface User ={
 name: 'xx';
 age : 30;
 gender? : string;
 readonly birth : number;
 [key : number]  : string -> 연속되는 숫자와 문자열을 그냥 통으로 지정해준거  저기의 key는 이름 바뀌어도 상관없음
}

let user: User ={
 name: 'xx',
 age : 30,
 birth : 2000,
 1:'A' -> ok
 1:'B' -> ok
}
user.birth = 1990; -> 추가안됨 readonly라서 처음에 할당할 때만 정할 수 있음

````
 - 문자열 리터럴 타입 [key : number]  : string -> string이라서 범위 가 너무 넓어서 미리 지정해주는것 미리 지정해 놓은 값들만 넣을 수 있음
````ts
type Score = 'A'| 'B'| 'C'| 'D'|
interface User ={
 name: 'xx';
 age : 30;
 gender? : string;
 readonly birth : number;
 [key : number]  : string -> 연속되는 숫자와 문자열을 그냥 통으로 지정해준거  저기의 key는 이름 바뀌어도 상관없음
}

let user: User ={
 name: 'xx',
 age : 30,
 birth : 2000,
 1:'A' -> ok
 1:'B' -> ok
}
````
 - 인터페이스로 함수 만들기
````ts
// 1번
interface Add{
 (num1 : number, num2 : number): number
 }
 const add : Add = function(x,y){
  return x+y
 }
 
// 2번
interface isAdult{
 (age:number):boolean
 }
 const a : isAdult = (age){
  return age > 19;
 }
 a(33) // true
````

























