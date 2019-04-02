'use strict';

//   #13 イベントリスナーを使ってみよう

{
    const button = document.querySelector('button');

    button.addEventListener('dblclick', () =>{
        console.log('clicked');
    });

}
