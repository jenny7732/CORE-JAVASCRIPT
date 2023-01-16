
import { attr, clearContents, diceAnimation , disableElement, enableElement, getNode, getNodes, visibleElement, invisibleElement, insertLast, memo} from "./lib/index.js";

/* [주사위 굴리기]
1. dice 애니메이션 불러오기
2. bindEvent 유틸 함수 만들기
3. handlerRollingDice 함수 만들고 토클로 애니메이션 제어하기
4. 변수 보호를 위한 클로저 + IIFE 사용하기 */

/* [레코드 리스트 보이기]
1. handlerRecord 함수를 만들기
2. disable 활성 유틸 함수 만들기
3. handlerReset 함수 만들기
4. visible 활성 유틸 함수 만들기
5. toggleState 유틸 함수 만들기 */

// [ 레코드 템플릿 뿌리기 ]
// 1. renderRecordListItem 함수 만들기
// 2. HTML 템플릿 만들기
// 3. 템플릿 뿌리기 

// [ 초기화 시키기 ]
// 1. clearContent 로 정보 지우기
// 2. total, count 초기화 
// 3. 스크롤 밑으로 보내기 
// 4. 메모이제이션 패턴 

//유사 배열, 배열의 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');
/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')
const recordButton = getNode('.buttonGroup > button:nth-child(2)')
const resetButton = getNode('.buttonGroup > button:nth-child(2)') */

memo('@tbody',()=>getNode('.recordListWrapper tbody'));

/* render */

let count = 0;
let total = 0;
// redux
// mobx

function renderRecordListItem(){
                        // dice.js 파일에 cube 설정해줌
  let diceValue = Number(attr(memo('cube'),'data-dice'));
  let template = /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${diceValue}</td>
      <td>${total += diceValue}</td>
    </tr>
  `
  
  insertLast(memo('@tbody'),template)
  recordListWrapper.scrollTop = recordListWrapper.scrollHeight
}

/* event */

//IIFE
//(함수)() or (함수()) -> 즉각실행함수
const handleRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;
  
  return () => {
    if(isRolling){
      stopAnimation = setInterval(diceAnimation, 100)
      
      disableElement(recordButton) //버튼 비활성화
      disableElement(resetButton)

    }else{
      clearInterval(stopAnimation);

      enableElement(recordButton) //버튼 활성화
      enableElement(resetButton)
    }
    isRolling = !isRolling;
  }
})()


const handleRecord = ()=>{

  renderRecordListItem()
  visibleElement(recordListWrapper) //보여주기

  
}

const handleReset = () => {

  count = 0;
  total = 0;

  invisibleElement(recordListWrapper) //숨기기
  clearContents('.recordListWrapper tbody')
}

rollingDiceButton.addEventListener('click', handleRollingDice)
recordButton.addEventListener('click', handleRecord)
resetButton.addEventListener('click', handleReset)