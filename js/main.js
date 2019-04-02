'use strict';

//   #14 イベントオブジェクトを扱ってみよう
// マウスの座標


{
    const div = document.querySelector('div');

    document.addEventListener('mousemove', e =>{
        div.textContent = `${e.clientX}:${e.clientY}`;
    });

}
