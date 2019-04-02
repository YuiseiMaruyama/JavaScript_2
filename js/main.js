'use strict';

//   #08 classListを使ってみよう

{
   const div = document.querySelector('div');

//    div.className = 'border-pink';//HTMLのdivのclass名がbox -> border-pinkに書き換わってしまう
//    div.className = ' box border-pink'; // boxクラスも書いておく
        // div.classList.add ('border-pink');
        // div.classList.remove ('box');

        // if(div.classList.contains ('border-pink')){
        //     div.classList.remove ('border-pink');
        // }else{
        //     div.classList.add ('border-pink');
        // }

        //toggleはdivにborder-pinkが存在なし->追加、存在する->削除
        div.classList.toggle('border-pink');

}
