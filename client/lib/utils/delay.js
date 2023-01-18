import { getNode } from "../dom/getNode.js";
import { isNumber, isObject } from "./typeOf.js";

/* 
//쭉 올라갔다가 회전하고 내려오고 싶은데 동시에 함 -> 콜백이 필요해진 시점
//서로간의 종속성이 없음 -> 이거 끝나고 이거 해 이런게 없다는 뜻
first.style.top = '-100px';
first.style.transform = "rotate(360deg)";
first.style.top = '0px';
 */

const first = getNode('.first');

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

//콜백지옥
/* delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = "rotate(360deg)";
    delay(()=>{
      first.style.top = '0px';
    })
  })
}) */

const defaultOptions = {
  shoudlReject : false, 
  timeout : 1000, 
  data : '성공했다', 
  errMessage : '알 수 없는 오류가 발생했습니다.'
}

//shoudlReject가 true면 오류, false면 성공
export function delayP(options = {}){

  let config = {...defaultOptions}; //얕은 복사 (참조는 동일한 대상을 가르켜서!!)

  if(isNumber(options)){
    config.timeout = options;
  }

  //객체 합성 mixin, 앞에 있는 값에 뒤에 있는 값이 덮어씌어짐!!
  if(isObject(options)){
    config = {...config, ...options};
  }

  const {shoudlReject, data, errMessage,timeout} = config;

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      !shoudlReject ? resolve(data) : reject(errMessage);
    },timeout);
  })
}

//delayP(3000).then(res=>console.log(res))

//프라미스 체이닝
/* delayP()
.then(res=>console.log(res))
.catch(err=>console.log(err)) */


//async await

async function delayA(){
  return '완료';
}

let result = await delayA()

//console.log(result)