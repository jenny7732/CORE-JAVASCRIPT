/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */




const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
  // hasOwnProperty: function (){
  //   return '헤헤'
  // }
};

let key = 'standardName';

// console.log( key in javaScript );


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// console.log(javaScript.hasOwnProperty(key));
// Object.prototype.nickName = 'tiger'

// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(Object.prototype.hasOwnProperty.call(javaScript,key));


let a = {}

//for (let key in~)까지 하면 조상에 있는거 까지 가져오니까 if 로 한번더 확인하는거

/* for~in문에서 객체 안의 대상을 파악하면 조상까지 올라가서 문제 생겨서 해결법은?
객체 자신의(own) 속성(property)인지 확인(has)하는 방법 : hasownproperty

그런데 hasownproperty가 함수 자체를 보호해주지않아 오염될 변질이 생겨서 해결법은?
Object.prototype.hasOwnProperty.call(javaScript,key) */

for(let key in javaScript){

  if({}.hasOwnProperty.call(javaScript,key)){
      console.log(key);
  }

}

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?










