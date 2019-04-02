'use strict';

//   #06 カスタムデータ属性を扱ってみよう

{
   //HTMLのカスタムデータ属性
   const h1 = document.querySelector('h1');

   console.log(h1.dataset.appId); //カスタムデータの取得には"dataset"の記述が必要
   h1.dataset.message = 'this is custom message';

}
