'use strict';

//   #10 要素のコピー､削除をしてみよう

{
  const h1 = document.createElement('h1');//HTMLにh1を作成
  h1.textContent = 'Title';
  document.body.appendChild(h1);//bodyの最後にh1を追加

  const p = document.createElement('p');//HTMLにpを作成
  p.textContent = 'hello.hello,hello';
  document.body.appendChild(p);//bodyの最後にpを追加

  const h2 = document.createElement('h2');
  h2.textContent = 'Sub Title';

  //insertBefore()でbodyのpの前にh2を追加
  document.body.insertBefore(h2,p);

//   const copy = p.cloneNode(true);//p要素をコピー
  const copy = p.cloneNode(false);//空のp要素をコピー
  document.body.insertBefore(copy,h2);

  document.body.removeChild(h2);//h2削除

}
