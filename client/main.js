
import { diceAnimation , getNode, getNodes} from "./lib/index.js";

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

//유사 배열, 배열의 구조 분해 할당
const [rollingDiceButton,recordButton,resetButton] = getNodes('.buttonGroup > button');

/* const rollingDiceButton = getNode('.buttonGroup > button:nth-child(1)')
const recordButton = getNode('.buttonGroup > button:nth-child(2)')
const resetButton = getNode('.buttonGroup > button:nth-child(2)') */

//IIFE
//(함수)() or (함수()) -> 즉각실행함수

const handlerRollingDice = (() => {
  let stopAnimation;
  let isRolling = false;
  
  return () => {
    if(isRolling){
      stopAnimation = setInterval(diceAnimation, 100)
      recordButton.disabled = true; //버튼 비활성화
    }else{
      clearInterval(stopAnimation);
      recordButton.disabled = false; //버튼 활성화
    }
    isRolling = !isRolling;
  }
})()

rollingDiceButton.addEventListener('click', handlerRollingDice)