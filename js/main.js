'use strict';

//   #15 preventDefaultを使ってみよう



{
    const a = document.querySelector('a');
    const span = document.querySelector('span');

    a.addEventListener('click', e =>{
        e.preventDefault();// 要素の規定の動作をキャンセルする
        a.classList.add('hidden');
        span.classList.remove('hidden');
    });

}
