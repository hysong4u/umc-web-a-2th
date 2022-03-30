// 함수:

// input : 인자 값
// output : 리턴 값

// convention : 개발자들의 규칙

// 함수이름은 꼭 이해하기쉽게 짓는다.

function multiplyTen(n){   //매개변수= n
    // console.log(n*10);
    const result = n*10;
    return result;
  };
  // return(반환)을 하는 이유는 변수에 값을 저장하고 간직해서 다른 작업에도 쓰는일이 많기 때문이다.
  
  console.log(multiplyTen(10));
  
  
  // ===============================================================
  
  
  // arrow function :
  
  const multiplyNine = (n)=>{
    console.log(n*9);
  }
  
  multiplyNine(9);
  