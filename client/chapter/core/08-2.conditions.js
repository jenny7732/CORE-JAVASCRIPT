/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */


let age = 22;

/* if(age>=14 && age<=90){
}else

 */


let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && " " && [] && { thisIsFalsy: false }; //{ thisIsFalsy: false }는 객체!!

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || "" || [2, 3].length || { thisIsFalsy: true };


let userName = prompt('이름 입력', '');
let pw;

//대소문자 구별없이 넣게는 어떻게??
if(userName?.toUpperCase() === 'Admin'.toUpperCase()){ //? : 옵셔널 체인징 -> null을 위해서 넣어줌
  pw = prompt('비밀번호를 입력하시오','');
  if(pw ==='TheMaster'){
    console.log('환영합니다.');
  }else if(userName ==='' || userName === null) {
    console.log('취소했습니다.');
  }else{
    console.log('인증되지 않은 사용자 입니다.');
  }
}else if(userName.replace(/\s*/g,'') ==='' || userName === null) {
  console.log('취소했습니다.');
}else{
  console.log('인증되지 않은 사용자 입니다.');
}