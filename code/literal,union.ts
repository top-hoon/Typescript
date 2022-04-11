// Literal Types

const userName1 = "Bob" // 문자형 리터럴
// let userName2 = "Tom"   // userName2 = String이라고 나옴 -> 값은 정해지지않았지만, 처음 초기화한 값의 타입을 따름
// userName2 = 3   // 그래서 string을 써 주어야함

let userName2: string | number = "Tom"  // 대신 이런식으로 타입 미리 지정해주면 가능
userName2 = 3



//ex)
type Job = "Police" | "developer" | "teacher";

interface User{
    name : string;
    job : Job;  // 이제 job에는 Job안에있는것만 쓸 수 있음
}

const user : User = {
    name:"bob",
    job:"developer"
}
console.log(user);

// 식별가능한 union타입

interface Car{
    name : "Car";
    Color : String;
    start():void;
}

interface Mobile{
    name : "mobile";
    Color : String;
    call():void;
}

function getGift(gift: Car| Mobile){
    console.log(gift.Color) // Color은 둘다 가지고있는거라 가능
    if(gift.name === "Car"){    // 각자가지고있는 메서드가 다를때는 if문으로 확인해주고
        gift.start();   // if문에서 Car를 인식해줘서 start()가 가능하게 해줌줌
   }else {
        gift.call()
    }
}

//교차 타입 합친 인터페이스들의 속성을 다 적어줘야하는데 같은 속성은 한번만 적어주면됨

interface Car1{
    name : string;
    start():void;
}

interface Toy{
    name : string;
    Color : string;
    price : number;
}

const toyCar: Car1 & Toy={
    name:"장난감자동차",
    Color:"black",
    price:4000,
    start() {}
}
console.log(toyCar)