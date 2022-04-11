// 함수

function add (num1:number,num2:number) : void{
    console.log(num1+num2); // 리턴하지않고 로그만 찍을 때
}
add(1,2);


function add2(...nums: number[]){    // 나머지 매개변수 -> 갯수 상관 x 전달받은 매개변수를 배열로 나타날 수 있게 함
    return nums.reduce((result,num)=> result+ num ,0);
}

add2(1,2,3)

///////////////////////////////////////////////////////////
interface User{
    name: string;
}
const Sam: User = {name:"Sam"};
function show(this:User){   // 매개변수자리에 this: type 설정해주면됨
    console.log(this.name); // this의 타입이 정해지지않아서 빨간줄이 뜸
}

const a = show.bind(Sam);
a(); // Sam

///////////////////////////////////////////////////////////

function showName(this:User, age:number, gender:'m'|'f'){
    console.log(this.name, age, gender);
}
const b = showName.bind(Sam);
b(30, 'm');    // 매개변수 넣어주어야함 > Sam 30 m

interface User2{
    name: string;
    age: number;
}
function join(name: string, age: number): User2
function join(name: string, age: string): string
function join(name: string, age: number|string): User2|string{ // if에 따라서 객체를 리턴하는지 아니면 string이 리턴되는지 다르기 때문에 리턴타입을 정해주었음
    if (typeof age ==="number"){
        return{
            name, age
        };
    }else {
        return "나이는 숫자로가자"
    }
}

const sam:User2 = join("sam",30);   // 에러가남, 그래서 오버로드를 사용해주어야함 똑같은 함수 다시만들어주기 타입만다르게
const sam2:String = join("sam","30");   // 에러가남, 매개변수의 타입이나 갯수에 따라서 다른 작동을 해야한다면 오버로드를 해서 새용해야함
console.log(sam);
console.log(sam2);