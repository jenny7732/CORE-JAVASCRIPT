
/* readyState
0: uninitalized // 초기화
1: loading //로딩
2: loaded //로딩이 완료된
3:interative //인터렉티브
4:complete //완료
 */

import { typeError } from "../error/typeError.js";


//xhrData 함수 만들기 

export function xhrData({ //매개변수에 받자마자 구조분해할당 -> 장점: 초깃값 설정 가능
  method = 'GET', 
  url = '', 
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    'Content-Type' : 'application/json'
  }
}={}){ //매개변수 기본값을 {} 객체로 해놓기
  
  //const {method, url, body} = options;
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  /* Object.entries(headers).forEach(([key, value]) => { //Object.entries() 객체의 프로퍼티를 [키, 값] 으로 반환시킨다
    xhr.setRequestHeader(key, value);
  }); */


  xhr.addEventListener('readystatechange', ()=>{
    const {status, readyState, response} = xhr; //객체 구조 분해 할당

    if(status >= 200 && status < 400){
      if(readyState === 4){ //if문이 없었다면 2,3,4 상태일때 모두 출력되어 3번 출력됨
        console.log('통신 성공');
        onSuccess(JSON.parse(response)); //문자열을 객체화시키기
      }
    }else{
      onFail('통신 실패');
    }
  })
  
  //서버에 요청 , POST 일때 문자열로 바꿔서 서버에 보내줌!
  xhr.send(JSON.stringify(body));

}

/* xhrData({
  url: 'https://jsonplaceholder.typicode.com/user',
  onSuccess: (result)=>{
    console.log(result);
  },
  onFail: (err)=>{
    console.error(err);
  }
}) */

//함수도 객체니까 객체에 추가하는 것처럼 메소드를 추가
//즉, xhrData 객체에 get이라는 메서드를 추가
xhrData.get = (url, onSuccess, onFail) =>{ 
  xhrData({
    url,
    onSuccess,
    onFail
  }) //xhr 함수 실행, xhrData.get 함수의 선언할 때 매개변수 순서는 상관없음
}

xhrData.post = (url, body,onSuccess, onFail) =>{ 
  xhrData({
    method:'POST',
    body,
    url,
    onSuccess,
    onFail
  }) 
}

xhrData.put = (url, body,onSuccess, onFail) =>{ 
  xhrData({
    method:'PUT',
    body,
    url,
    onSuccess,
    onFail
  })
}

xhrData.delete = (url, onSuccess, onFail) =>{ 
  xhrData({
    method:'DELETE',
    url,
    onSuccess,
    onFail
  })
}


/* 
xhrData.delete(
  'https://jsonplaceholder.typicode.com/users/3',
  (result)=>{
    console.log(result);
  },
  (err)=>{
    console.log(err);
  }
)
 */
/* 
xhrData('POST', 'https://jsonplaceholder.typicode.com/users', {
    "name": "kindtiger",
    "username": "seonbeom",
    "email": "tiger@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  });
 */
/* 


const xhr = new XMLHttpRequest();

//비동기 통신 오픈
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

xhr.addEventListener('readystatechange', ()=>{
  if(xhr.status >= 200 && xhr.status < 400){
    if(xhr.readyState === 4){ //if문이 없었다면 2,3,4 상태일때 모두 출력되어 3번 출력됨
      console.log('통신 성공');
      JSON.parse(xhr.response); //문자열을 객체화시키기
    }
  }else{
    console.error('통신 실패');
  }
})

//서버에 요청
xhr.send();


 */



// promise API

const defaultOptions = {
  url: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  body:null
}

export function xhrPromise(options = {}) {
  const xhr = new XMLHttpRequest();

  const {method, url, body, headers} = Object.assign({}, defaultOptions, options);

  if(!url) typeError('서버와 통신할 url 인자는 반드시 필요합니다.')

  xhr.open(method, url);

  //body는 통신할 때 던져주는 JSON 파일
  xhr.send(body ? JSON.stringify(body) : null)

  return new Promise((resolve, reject) => {
    xhr.addEventListener('readystatechange', () => {
      const { status, readyState, response } = xhr;

      if (status >= 200 && status < 400) {
        if (readyState === 4) {
          resolve(JSON.parse(response));
        } else {
          reject('에러입니다.');
        }
      }
    });
  });

}

xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
}

xhrPromise.post = (url,body) => {
  return xhrPromise({
    url,
    body,
    method: 'POST'
  })
}

xhrPromise.put = (url,body) => {
  return xhrPromise({
    url,
    body,
    method: 'PUT'
  })
}

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: 'DELETE'
  })
}



/* xhrPromise
.get('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log(err);
}) */


