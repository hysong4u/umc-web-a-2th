// 반복문


// 반복문엔 for 문, while 문 , do while 문이 있다.



//for 문

// for(초기값;종료조건;중첩){
//  실행코드
// }


// for (let i =1 ; i < 11 ; i++){
//   console.log(i);
// }


//==========================================================

// 배열 요소에 각각 10씩 더하기

const array = [15,21,24,51,60];

for (let i = 0 ; i < array.length ; i++){
  console.log(array[i]);
  array[i]+=10;
}
console.log(array);


//==========================================================

//while 문

// 시작점
// while(조건){
//   코드
//   증강
// }

// 조건이 true 일 시 , 반드시 break 걸어주기

let i =1;
while(i < 11){
  console.log(i);
  i++;
}


let  j =0;
while (j < array.length){
  array[j]+=20;
  j++;
}
console.log(array);



//==========================================================

//do while 문

// 시작점
// do{
//   코드
// }조건


let k =1;
do{
  console.log(k);
  k++;
}while(k<=10);




// 반복문

//for 문

// for(초기값;종료조건;중첩){
//  실행코드
// }


// for (let i =1 ; i < 11 ; i++){
//   console.log(i);
// }


//==========================================================

// 배열 요소에 각각 10씩 더하기

const array = [15,21,24,51,60];

for (let i = 0 ; i < array.length ; i++){
  console.log(array[i]);
  array[i]+=10;
}
console.log(array);


//==========================================================

//while 문


// while 문은 보통 루프를 돌면서 특정 값을 만났을 시 break를 통해 루프를 멈추고 싶을 때 사용한다.

// 시작점
// while(조건){
//   코드
//   증강
// }

// 조건이 true 일 시 , 반드시 break 걸어주기

let i =1;
while(i < 11){
  console.log(i);
  i++;
}


let  j =0;
while (j < array.length){
  array[j]+=20;
  j++;
}
console.log(array);



//==========================================================

//do while 문

// 시작점
// do{
//   코드
// }조건


let k =1;
do{
  console.log(k);
  k++;
}while(k<=10);

//==========================================================





