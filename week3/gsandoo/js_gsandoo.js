// # 자바스크립트

// 변수 선언 , 초기화 , 재할당

//변하지 않는 값
const 변수1 = "코딩"; 
// 변하는 값 
let 변수2 = "자바스크립트";

// // const 변수1 = "hello";
// 변수2 = 'kim park';
// console.log(변수2);

// ======================================

// 데이터타입: 자료형
// 1. string : 문자열
const str= 'hi';
const str2 = '2001!';

// 2. number : 숫자
const num = 1;

// 3. bigInt: 큰길이 숫자

//  4. boolean: true , false
const bool = true;

// 5. symbol: 중복되지 않는 고유 값

// 6. null/ undefined 

const n = null;
// 수동적(의도적 없는 값)
const un = undefined;
// 자동적

//  7. object : 객체 , 함수 , 배열

// =======================================================

// 1. 산술연산자 : + , - , / , * , %(나머지) , **(거듭) , ++ , -- 

const a= 10%3; // 나머지
console.log(a);

const b =10 **2; // 거듭제곱
console.log(b);

let c = 10;  //변경 가능 값
c+=5;        // c에다 5더해줌
console.log(c);

c-=8;         // -8 빼줌
console.log(c);

// 2. 할당 연산자 : =

// 3. 문자열 연산자 = +

let data = " hell0  " + "world"; //공백은 따로 넣어줘야함
console.log(data);
data+="!!";
console.log(data);

// 4.비교연산자 :
// 1). == : 대충비교
// 2). === : 엄격히 비교 (사용 권장)
// 3). !== : 엄격히 비교 (사용 권장)
// 4). != : 대충비교
// 5). > , <:  문자열은 문자가 더길고 , 알파벳은 마지막에 올수록 크다

// 5. 논리연산자 : && , || , !

const logic = true && false ;  // 두개 참 = 참 ,아니면 거짓
console.log(logic);//false

const logic2 = true||false;  //둘중 하나라도 참 = 참 
console.log(logic2); //true

const logic3 = !true;
console.log(logic3); //false