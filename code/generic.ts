// function getSize(arr:number[] | string[]):number{ // 이것도 타입 여러개 넣는것 가능함
//     return arr.length;
// }
const arr1 = [1,2,3];
const arr2 = ["a","b","c"];
const arr3 = [false,false,true];
const arr4 = [{},{},{name:"tim"}];

console.log(getSize(arr1))
// 타입 나올때마다 늘려주는거 귀찮으니 저 함수의<> 을 설정해주기기
function getSize<T>(arr:T[]):number{ // 이것도 타입 여러개 넣는것 가능함
    return arr.length;
}
console.log(getSize<number>(arr1))  // 여기다가 배열의 타입 넣어주기 그러면 저 함수의 Type이 number 가됨
console.log(getSize<string>(arr2))
console.log(getSize(arr3))
console.log(getSize(arr4))

// 인터페이스에 제네릭 활용

interface Mobile<T>{
    name: string;
    price: number;
    option: T;    // option의 타입을 정해주지 않은것

}
const m1:Mobile<object> = { // -> option 객체의 자료형이 정해져 있다면 <{color:string, coupon:boolean}> 이렇게 해줘도됨
    name:"s21",
    price:20,
    option: {color:'black', coupon:false}
}

const m2:Mobile<boolean> = {
    name:"s21",
    price:20,
    option: false
}
console.log(m1)
console.log(m2)

function showName<T extends {name:string}>(data:T):string{  // 이런식으로 들어오는 매개변수의 속성의 값을 지정 해줄 수 있다
    return data.name
}
console.log(showName(m1))



