// 값의 정보들을 key : value 값으로 만든다.
// 객체는 중괄호를 쓴다.



//예:
const Pooh = {
    name: 'Pooh' , 
    species : 'bear',
    job : 'Disney character',
    gender : "boy",
    'say-hi': ()=>{ //key 값에 특수문자가 들어갈 경우 " " 로 묶어줘야한다.
      console.log("Hi my name is Pooh")
    }
  }
  
  // =================================================================
  
  
  //객체 접근 : . 이나 []
  
  
  console.log(Pooh.name);       //Pooh
  console.log(Pooh["name"]);    //Pooh
  console.log(Pooh.species);    //bear
  console.log(Pooh.job);        // Disney character
  console.log(Pooh.gender);     //boy
  console.log(Pooh['say-hi']());      //"Hi my name is Pooh"
  //메소드 호출은 () 
  
  
  
  //property : 객체안의 데이터
  //method : 객체안의 함수
  
  // =================================================================
  
  //메소드 추가
  
  Pooh['say-Bye']=()=>{
    console.log("Byebye. See you later ! ")
  }
  console.log(Pooh['say-Bye']());
  
  
  Pooh.favorites = ['Honey','Friends','cake']
  console.log(Pooh.favorites);
  
  
  //메소드 삭제 (delete)
  
  delete Pooh.favorites;
  console.log(Pooh);
  
  
  
  
  // =================================================================
  
  //생성자 함수 : 틀
  
  function Character(name,species,job,gender){  //인스턴스
    this.name=name;
    this.species=species;
    this.job=job;
    this.gender=gender;
    this['say-hi']= ()=>{
      console.log(`Hello my name is ${this.name}`);
    }
    this['say-bye']= ()=> {
      console.log(`Byebye , this is ${this.name} ! Thank you!`);
    }
  }
  
  const kim = new Character('Kim','cat','worker','girl');
  console.log(kim);
  
  