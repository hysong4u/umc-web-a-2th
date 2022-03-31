// if문
// false : 0, -0, null, NaN, undefined, ''

let age = 22;

if (age > 10) {
    console.log(`술을 마실 수 있다.`);
} else {
    console.log(`미성년자`);
}

// 축약형 : 삼항연산자
// 조건 ? 참 코드: 거짓 코드;

const result = age > 10 ? console.log(`술을 마실 수 있다.`) : console.log(`미성년자`);


// switch문

age = 30;

switch (age) {
    case 40:
        console.log('40대');
        break;
    case 30:
        console.log('30대');
        break;
    case 20:
        console.log('20대');
        break;
    case 10:
        console.log('10대');
        break;
}