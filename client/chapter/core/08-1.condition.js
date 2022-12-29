/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let firstValue = Number(prompt("숫자를 입력해주세요.")); 

if(firstValue>0){
  console.log(1);
}
else if(firstValue<0){
  console.log(-1);
}
else{
  console.log(0);
}

//삼항연산자
/* let message = 
(number > 0) ? 1 : (number < 0) ? -1 : 0; console.log(message) */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';

if(didWatchMovie.includes('yes')){
  console.log('그거 재밋더라..');
}else if(goingToWatchMovie === 'yes'){
  console.log('너무설렌다~');
}else{
  console.log('음 난 별로');
}

let movieMessage = 
(didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '너무 설렌다!' : '난 별로';


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식