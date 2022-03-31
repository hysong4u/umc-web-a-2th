for (let i = 1 ; i < 11 ; i++) {
   console.log(i);
 }

 const numArr = [45, 32, 11, 98, 22];

 for (let i = 0; i < numArr.length ; i++) {
   console.log(numArr[i]);
   numArr[i] += 10;
 }

 console.log(numArr);

// ===========================================================================

 //let i = 12;
 //while (i < 11) {
 //  console.log(i);
 //  i++;
 //}

// let i = 1;
// while (true) {
//   if (i > 10) {
//    break;
//  }

//   i++;
//   if (i%2 !== 0) { //홀수 일 때
//     continue;
//   }

//   console.log(i);
// }

// const numArr = [45,32,11,98,22];

// let i = 12;
// while (i < numArr.length) {
//   console.log(numArr[i]);
//   numArr[i] += 10;
//   i ++;
// }
// console.log(numArr);


let i = 12;
do {
  console.log(i);
  i++;
} while (i < 11);