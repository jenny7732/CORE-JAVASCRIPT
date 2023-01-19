

/* global gsap */

import { 
  tiger,
  delayP,
  getNode,
  changeColor,
  renderUserCard,
  renderSpinner,
  renderEmptyCard,
  attr
  
 } from "./lib/index.js";





/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users/1')
.then((res)=>{
  insertLast(document.body,JSON.stringify(res));
})
.catch((err)=>{
  console.log(err);
}) */



/* xhrData.get(
  'https://jsonplaceholder.typicode.com/users/1',
  (res)=>{
    insertLast('body',JSON.stringify(res))
  },
  (err)=>{
    insertLast('body','데이터 로딩에 실패했습니다.')
  }
)

 */

/* async function render(){
  
  await delayP(2000); //2초 후 밑줄 실행
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data)

}

render() */

const userCardContainer = getNode('.user-card-inner')

async function rendingUserList(){

  renderSpinner(userCardContainer)

  try{
    await delayP(2000); //2초 뒤에 랜더링이 된다.
    getNode('.loadingSpinner').remove();
    let response = await tiger.get(`http://localhost:3000/users`) //.get, .post 등은 tiger()를 return 하니까 프라미스이다. 그래서 await!!
  
    let userData = response.data;
  
    //userData.forEach(data => renderUserCard(userCardContainer,data) ) //축약형
  
    userData.forEach((data)=>{
      //console.log(data);
      renderUserCard(userCardContainer,data)
    })
  
    gsap.utils.toArray('.user-card') //gsap의 배열로 만들어주는 유틸함수
  
    changeColor('.user-card');
  
    gsap.to(gsap.utils.toArray('.user-card'),{
      x:0,
      opacity:1,
      duration:1.5, 
      stagger:0.2 //시차를 둠
    })

  }catch(err){
    renderEmptyCard(userCardContainer)
  }

}

rendingUserList()



function handler(e){
  let deleteButton = e.target.closest('button');
  let article = e.target.closest('article');

  if(!deleteButton || !article) return; //둘 중 하나라도 아니면 함수가 끝남
  //버튼만 누르면 실행됨..  질문 (2)

  let id = attr(article,'data-index').slice(5);

  tiger.delete(`http://localhost:3000/users/${id}`).then(()=>{
    userCardContainer.innerHTML = ''; //화면 전체를 지우고
    rendingUserList() //원하는 남은 데이터로만 다시 랜더링
  })
}


userCardContainer.addEventListener('click',handler)