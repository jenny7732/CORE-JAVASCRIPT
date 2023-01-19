
import { getNode as $, loadStorage, saveStorage,deleteStorage } from "./lib/index.js";

const textField = $('#textField');
const deleteButton = $('input[value="삭제"]');

loadStorage('area').then((res)=>{
  textField.value = res;  //저장소에 저장해주기
})

function inputHandler(){
  saveStorage('area', textField.value); //textField에 새로고침해도 계속 남아있음
}

function deleteHandler(){
  deleteStorage('area')
}

textField.addEventListener('input',inputHandler); //input : 글이 써지면 바로바로 저장
deleteButton.addEventListener('click', deleteHandler);