### utility
 - keyof -> key 값들을 받아줌
 - partial<T> -> 속성 전부를 입력안해도 에러 안남
 - Required<T> -> 꼭 모든 속성
 - Required<T> -> 처음에 할당만 가능하고 후에 수정 불가
 - Record<K,T>
````ts
type Grade = "1"|"2"|"3"|"4";
type Grade = "A"|"B"|"C"|"D";

const score : Record<Grade, Grade>={
    1:"A",
    2:"B",
    3:"C",
    4:"D",
}
````
 - Record 활용
````ts
interface User {
    id:number;
    name:string;
    age:number;
}

function isValid(user:User){
    const result : Record<keyof User, boolean>={    //keyof 로 key값 가져오기
        id:user.id>0,
        name:user.id !== "",
        id:user.age > 0,
        
    }
}
````
 - Pick<T,K> 
```ts
const admin : Pick<User, "id"| "name">={    // 가져오고 싶은 속성만 사용
    id:0,
    name: "Bob"
}
```
 - Omit<T,K> -> 특정 프로퍼티만 제외하고!