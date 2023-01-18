



import { 
  xhrData,
  insertLast,
  xhrPromise,
  tiger,
  delayP
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

async function render(){
  
  await delayP(2000); //2초 후 밑줄 실행
  let response = await tiger.get('https://jsonplaceholder.typicode.com/users/1')
  console.log(response.data)

}

render()