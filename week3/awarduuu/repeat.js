// for문
// for(초기값; 종료조건; 증감){
// 실행할 코드
// }

for (let i = 1; i < 11; i++) {
    console.log(i);
}

const numArr = [45, 32, 11, 90, 22];

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i])
    numArr[i] += 10
}

console.log(numArr)

// =====================================
//  while문
// while(조건){
//     실행할 코드;
//     증감;
// }

let i = 1;
while (i < 11) {
    console.log(i);
    i++;
}

while (true) {
    if (i > 10) {
        break;
    }
    i++;
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);

}

// ======================================
// do while문
// 조건을 나중에 확인하고, 한번이라도 코드를 실행할 경우
do {
    console.log(i);
    i++;
} while (i < 10)