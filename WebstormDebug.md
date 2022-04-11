## 웹스톰으로 디버깅하기
 1. 일단 npm init,  tsc init -> package.json, tsconfig.json 생성
 2. ts 파일생성

  ![화면 캡처 2022-04-11 113932](https://user-images.githubusercontent.com/79463595/162656244-83b2441b-6729-4bd8-97c1-feb4c09c4ba9.png)
  
 3. Run/Debug Configurations 설정 -  Node parameters에 --require ts-node/register,  JavaScript file에 index.ts를 설정

![화면 캡처 2022-04-11 113953](https://user-images.githubusercontent.com/79463595/162656340-aa1791f9-cf6e-4421-92d7-a747d6a0e552.png)

4. Typescript를 실행할 수 있도록 dev dependency에 typescript와 ts-node를 추가
5. 이제 포인트 잡아서 실행하면 잘 걸림

![화면 캡처 2022-04-11 114502](https://user-images.githubusercontent.com/79463595/162656516-69cc3fc7-2f2c-43d7-b9a4-7565b5d39f4c.png)
