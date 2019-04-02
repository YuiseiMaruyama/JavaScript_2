'use strict';

//  #04 親要素､子要素を指定してみよう

{
    const ul = document.querySelector('ul');

    // console.log(ul.parentNode);// body
    // console.log(ul.children);// li

    // console.log(ul.children[0]);// <li>item 0</li>

    for(let i = 0; i<ul.children.length; i++){
        console.log(ul.children[i].textContent);
    }

}
