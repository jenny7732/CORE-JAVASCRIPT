import { getNode } from "../dom/getNode.js";


const first = getNode('.first');

function delay(callback, timeout = 1000){
  setTimeout(callback, timeout);
}

//콜백지옥
delay(()=>{
  first.style.top = '-100px';
  delay(()=>{
    first.style.transform = "rotate(360deg)";
    delay(()=>{
      first.style.top = '0px';
    })
  })
})


/* 
//쭉 올라갔다가 회전하고 내려오고 싶은데 동시에 함 -> 콜백이 필요해진 시점
//서로간의 종속성이 없음 -> 이거 끝나고 이거 해 이런게 없다는 뜻
first.style.top = '-100px';
first.style.transform = "rotate(360deg)";
first.style.top = '0px';
 */