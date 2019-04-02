'use strict';

//   #10 要素のコピー､削除をしてみよう

{
  const text = document.querySelector('input[type="text"]');
  const textarea = document.querySelector('textarea');

  console.log(text.value);
  console.log(textarea.value);

//   text.focus();//textのボックスの枠が青くなる
  text.select();//中のtextに青いマーカーが入る
  text.disabled = true;//入力できないように設定

}
