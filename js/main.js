'use strict';

//  #03 querySelectorを使ってみよう

{
    document.querySelector('h1').textContent = 'H1!';

    // nth-child(odd) 奇数番目の要素指定
    document.querySelectorAll('li:nth-child(odd)').forEach(li => { // HTML内のliを全て適用
        li.textContent = 'li!'
    });
}
