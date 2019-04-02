'use strict';

//   #09 要素を生成してみよう

{
  const h1 = document.createElement('h1');//HTMLにh1を作成
  h1.textContent = 'Title';
  document.body.appendChild(h1);//bodyの最後にh1を追加

  const p = document.createElement('p');//HTMLにpを作成
  p.textContent = 'hello.hello,hello';
  document.body.appendChild(p);//bodyの最後にpを追加

  const h2 = document.createElement('h2');
  h2.textContent = 'Sub Title';
  document.body.insertBefore(h2,p);//bodyのpの前にh2を追加

}
