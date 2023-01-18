
       
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPolicy:'no-referrer',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}
       
             //화살표 함수 시작
export const tiger = async (options = {})=>{

  const {url, ...restOptions} = {
   ...defaultOptions, 
   ...options, 
   headers:{...defaultOptions.headers, ...options.headers} //깊은 복사를 위해 얕복 한번 더
  }

  //fetch()가 promise를 반환하니까 그 값을 뽑아내기 위해서 await을 사용!!
  //restOptions : url을 제외한 나머지 객체 프로퍼티들
  let response = await fetch(url, restOptions)

  if(response.ok){
    //response 객체에 key값이 data 추가!!
    //response.json() : response에 있는 json을 가져오겠다. 
    //근데 프라미스를 반환하니까 await 으로 값을 받기
    response.data = await response.json()
  }
  return response;
}

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options
  })
}

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options
  })
}

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options
  })
}

