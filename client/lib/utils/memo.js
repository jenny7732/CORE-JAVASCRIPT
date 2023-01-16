
//메모이제이션 : 브라우저에게 같은 작업을 반복하지 않기 위해 사용
//즉시 실행 함수
export const memo = (() => {
  const cache = {}

  return (key,callback) => {
    if(!callback) return cache[key]; //콜백함수가 없으면 cache[key] 리턴해준다.

    if(cache[key]){
      console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
      return;
    }
  
    cache[key] = callback();
  
    console.log(cache);
  }
})()



// memo('name',()=>'tiger')
// memo('name')

//console.log(memo('name',()=>'tttt'));
//console.log(memo('name'));



//memo('cube',()=> document.querySelector('#cube'));



//console.log( memo('cube') );








