// 배열

//선언방법 

//1. []

const players = ['kim','park','lee','kang'];


// 2. new Array()    <-- 소괄호 아님 주의

const soccerPlayer = new Array('lee','kim','park','song');
console.log(soccerPlayer);

// 인덱싱으로 값 입력하기

const nbaPlayer= [];
nbaPlayer[0]='LeBron James';
nbaPlayer[1]='Kevin Durant';
nbaPlayer[2]='Stephen Curry';
nbaPlayer[3]='Luka Doncic';
console.log(nbaPlayer);

//====================================

//접근 : 인덱싱으로

const king= nbaPlayer[0];
console.log(king);

//=====================================

// 추가 및 삭제

//push : 배열 뒤에 추가
nbaPlayer.push("Ja Morant");
console.log(nbaPlayer);  // push 로 추가

// //unshift : 배열 앞에 추가

// nbaPlayer.unshift("Kobe Bryant");
// console.log(nbaPlayer);

// //shift : 배열 앞 삭제

// nbaPlayer.shift();
// console.log(nbaPlayer);

//pop : 배열 뒤 한개 삭제

 nbaPlayer.pop(); //pop으로 하나 뺌
console.log(nbaPlayer );


//=====================================


//splice : 원하는 지점 추가 및 삭제

//splice(시작 , 삭제하고 싶은 원소의 개수 , 추가하고 싶은 원소);


//삭제 

// nbaPlayer.splice(2,2); //시작점부터 오른쪽으로 삭제 개수
// console.log(nbaPlayer);


// 추가 

nbaPlayer.splice(2,0,"Carmelo Anthony",'Chris Paul');
console.log(nbaPlayer); //시작 값 전에 값 채워넣는것

//=====================================
