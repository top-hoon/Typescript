## call
  - call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정 가능
````js
const mike = {
    name  : "mike"
};

function show (){
    console.log(this.name)
}
show(); // -> this.name -> window.name 이라서 공백
show.call(mike) // -> mike
````
 - call 의 첫번째 매개변수는 this로 사용할 값
````js
function update(birth, occupation){
    this.birth = birth;
    this.occuaption = occupation;
}

update.call(mike, 1999, "singer") //-> this에 mike
console.log(mike); // ->  birth = 1999, name:mike, occupation : "singer 이런식으로 출력됨
````
## apply
 - apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같음
 - call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만 , apply는 매개변수를 배열로 받음
````js
const mike = {
    name  : "mike"
};

function update(birth, occupation){
    this.birth = birth;
    this.occuaption = occupation;
}

update.apply(mike, [1999, "singer"]) //-> this에 mike
console.log(mike); // ->  birth = 1999, name:mike, occupation : "singer 이런식으로 출력됨
````
 - 매개변수를 배열로 받기만 하면 위의 call과 똑같은 결과를 받을 수 있음
````js
const nums = [1,2,3,4,5];
const minNum = Math.min(nums) // Nan
const minNum = Math.min(...nums) // 이런식으로 넣어줘야함    1

const minNum = Math.min.apply(null, nums); // (null, [1,2,3,4,5]) -> 이런식으로 들감. null 은 this값임
const minNum = Math.min.call(null, ...nums); // (null, 1,2,3,4,5) -> 이런식으로 들감. null 은 this값임

````

## bind
 - 함수 this의 값을 영구히 바꿀 수 있음
````js
const mike ={
    name: "Mike",
};

function update (birth, occupation){
    this.birth = birth;
    this.occuaption = occupation;
}

const updateMike = update.bind(mike);   // 항상 mike를 this 로 받음
updateMike(1999, 'police')
console.log(mile)// birth = 1999, name:mike, occupation : "police


//ex)
const user = {
    name : "mike",
    showName : function (){
        console.log(`hello, ${this.name}`);
    }
}
user.showName();    // mike

let fn = user.showName();   // 이렇게하면 this가 window를 가리킴

// 이렇게 해야 this가 user를 가리킴
fn.call(user);
fn.apply(user);

//bind
let boundFn = fn.bind(user);
boundFn() // mike

````


