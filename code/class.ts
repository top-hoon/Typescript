//접근 제한자 (Access modifier) - public(default), private, protected

class car{
    name: string = "car";       // public이 생략되어있음, private 라고 하면 밑에서 에러남 private -> #name으로도 표현가능 기능상 차이는  없음
    // color: string;           // name을 protected로 설정할 경우 자식클래스 에러는 다 사라지는데 인스턴스에서는 사용못함 에러남
                                // readonly 로 설정하면 수정할 수 없음 -> 바꾸고싶다면 constructor에  name을 추가해 주어야함
    constructor(readonly color:string) { // 위에서 color를 선언안해주면 error나는데, public이나 readonly로 지정해주면됨
        this.color = color;
    }
    start(){
        console.log("start");
    }
}

const bmw = new car("red");

class Bmw extends car{
    constructor(color:string) {
        super(color);   // super없으면 error 남
    }
    show(){
        console.log(super.name);    // public이라서 자식클래스에서  접근해도 가능함
    }
}
const z4 = new Bmw("blakc")

// public이 생략되어있음, private 라고 하면 밑에서 에러남 private -> #name으로도 표현가능 기능상 차이는  없음
// color: string;           // name을 protected로 설정할 경우 자식클래스 에러는 다 사라지는데 인스턴스에서는 사용못함 에러남
// readonly 로 설정하면 수정할 수 없음 -> 바꾸고싶다면 constructor에  name을 추가해 주어야함
// 위에서 color를 선언안해주면 error나는데, public이나 readonly로 지정해주면됨
// static -> static으로 선언을 해줄시에는 this.name -> car.name - 클래스로 찾아오게 되어있음

// 추상 class

abstract class suit{
    color: string;
    constructor(color:string) {
        this.color = color;
    }
    abstract doSome():void; // 추상메소드는 껍데기만 만들어놓고 상속받을때 구현
}

class black extends suit{
    constructor(color:string) {
        super(color);
    }
    doSome() {
        console.log("하이")
    }
}
const black2 = new black("black");
