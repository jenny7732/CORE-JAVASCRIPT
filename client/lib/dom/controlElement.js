import { typeError } from "../error.js";

export function disableElement(node){
  if(node.nodeType !== document.ELEMENT_NODE){
    typeError('disableElement 함수의 인자는 DOM  요소 노드 이어야 합니다.')
  }
  node.disabled = true;
}

export function enableElement(node){
  node.disabled = false;
}