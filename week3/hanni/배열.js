// 선언 : [], new Array()
// const travel_spot = ['방콕', '뉴욕', '파리'];
// const travel_spot = new Array('방콕', '뉴욕', '파리');

const travel_spot = new Array();
travel_spot[0] = "방콕";
travel_spot[1] = "뉴욕";
travel_spot[2] = "파리";

const paris = travel_spot[2];
console.log(paris);


// travel_spot = ['토론토', '멜버른', '바르셀로나', '아테네']; //새로운 배열 재할당 불가

// push : 뒤에 원소 추가
travel_spot.push("토론토", "퀘백");
console.log(travel_spot);

// unshift : 앞에 원소 추가
travel_spot.unshift("바르셀로나");
console.log(travel_spot);

// splice : 원하는 지점에 추가 및 삭제
travel_spot.splice(4, 0, "멜버른", "아테네");
console.log(travel_spot);

// pop : 뒤에서 원소 삭제
const result = travel_spot.pop();
console.log(travel_spot, result);

// shift : 앞에서 원소 삭제
const result1 = travel_spot.shift();
console.log(travel_spot, result1);

// splice
const result2 = travel_spot.splice(3, 3); //3번쨰 인덱스에서 3번째 인덱스를 포함한 3개의 값 삭제
console.log(travel_spot, result2);

travel_spot.splice(1, 1, "이스탄불", "하노이"); //1번째 인덱스에서 1개의 값을 삭제하고 그 자리에 새로운 값 추가
console.log(travel_spot);