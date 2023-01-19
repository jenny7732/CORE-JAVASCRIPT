import { insertLast } from "./index.js";

const createUserCard = ({id='', name='', email='', website=''}={}) => {

  return /* html */ `
  <article class="user-card" data-index="user-${id}">
  <h3 class="user-name">${name}</h3>
  <div class="user-resouce-info">
    <div>
      <a class="user-email" href="${email}">${email}</a>
    </div>
    <div>
      <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
    </div>
  </div>
  <button class="delete">삭제</button>
  </article>
  `
}

/* console.log(createUserCard({
  id:1, 
  name:'jenny', 
  email:'jenny7732@naver.com', 
  website:'naver.com'
})) */

export const renderUserCard = (target,data) => {
  insertLast(target,createUserCard(data));
}