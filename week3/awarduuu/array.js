// 배열

// 1. 선언
// []
const travel_spot = ['방콕', '뉴욕', '파리'];

// new Array()
const travel_spot_2 = new Array('방콕', '뉴욕', '파리');

const travel_spot_3 = new Array();
travel_spot_3[0] = '방콕'
console.log(travel_spot_3);
travel_spot_3[1] = '런던'
console.log(travel_spot_3);

// 2. 접근 : index

const paris = travel_spot[2];
console.log(paris);

// 3. 추가 및 삭제

// push : 뒤에 원소 추가

travel_spot.push('토론토', '멜버른', '바르샤', '아테네');
console.log(travel_spot);

// unshift : 앞에 원소 추가

travel_spot.unshift('첼시');
console.log(travel_spot);

// splice : 원하는 지점에 추가 및 삭제
// -> splice(시작 index, 삭제하고 싶은 원소의 개수, 추가하고 싶은 원소들)

travel_spot.splice(4, 0, '토트넘');
console.log(travel_spot);

// pop : 뒤에서 원소 삭제

const result = travel_spot.pop();
console.log(travel_spot, result);

// shift : 앞에서 원소 삭제
const result1 = travel_spot.shift();
console.log(travel_spot, result1);

// splice 실습
const result2 = travel_spot.splice(3, 3);
console.log(travel_spot, result2);

travel_spot.splice(1, 1, '이스탄불', '하노이');
console.log(travel_spot);
