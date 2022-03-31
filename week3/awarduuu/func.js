// 함수, 변수명은 모두가 알아볼 수 있도록 의미있게 짓는다.
function multiply10(num) {
    const result = num * 10;
    return result;
    // return하지 않으면 undefined
}

const data = multiply10(10);
console.log(data);

// arrow function :
// 인자나, return 값이 한줄인 경우 많이 사용

// const multiply10 = (num) => {
//     const result = num * 10;
//     return result;
// }

// const multiply10 = num => num*10;
