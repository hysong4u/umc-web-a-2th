
//조건문

//if문

// if(조건){
//   실행할 코드
// }


let age = 15;

if (age>=19){
  console.log("성인");
}else{
  console.log("미성년자");
}

// if(참) => 실행코드
// if(거짓) => else 실행코드

//===================================================

// 삼항연산자:

// condition ?true :false

const AdultOrTeenager=age===15  ? "Teenager" : "Adult";
console.log(AdultOrTeenager);


//===================================================

// if ,else if , else

const Kim = 15;
if(Kim === 10){
  console.log(`Kim 의 나이는 ${Kim} 입니다`);
}else if (Kim ===12){
  console.log(`Kim 의 나이는 ${Kim} 입니다`);
} else if (Kim ===13){
  console.log(`Kim 의 나이는 ${Kim} 입니다`);
}else{
  console.log(`Kim 의 나이는 ${Kim} 입니다`);
}

//===================================================

//switch 문

let lee = 55;

switch(lee){
  case 70:
    console.log("70대");
    break;
  case 60:
    console.log("60대");
    break;
  case 50:
    console.log("50대");
    break;
  default:
    console.log("nope")
    
}