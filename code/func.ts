// 함수

function add (num1:number,num2:number) : void{
    console.log(num1+num2); // 리턴하지않고 로그만 찍을 때
}
add(1,2);


function add2(...nums: number[]){    // 나머지 매개변수 -> 갯수 상관 x 전달받은 매개변수를 배열로 나타날 수 있게 함
    return nums.reduce((result,num)=> result+ num ,0);
}

 add2(1,2,3)
