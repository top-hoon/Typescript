"use strict";
// 함수
function add(num1, num2) {
    console.log(num1 + num2); // 리턴하지않고 로그만 찍을 때
}
add(1, 2);
function add2(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
add2(1, 2, 3);
const Sam = { name: "Sam" };
function show() {
    console.log(this.name); // this의 타입이 정해지지않아서 빨간줄이 뜸
}
const a = show.bind(Sam);
a(); // Sam
///////////////////////////////////////////////////////////
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const b = showName.bind(Sam);
b(30, 'm'); // 매개변수 넣어주어야함 > Sam 30 m
function join(name, age) {
    if (typeof age === "number") {
        return {
            name, age
        };
    }
    else {
        return "나이는 숫자로가자";
    }
}
const sam = join("sam", 30); // 에러가남, 그래서 오버로드를 사용해주어야함 똑같은 함수 다시만들어주기 타입만다르게
const sam2 = join("sam", "30"); // 에러가남, 매개변수의 타입이나 갯수에 따라서 다른 작동을 해야한다면 오버로드를 해서 새용해야함
console.log(sam);
console.log(sam2);
