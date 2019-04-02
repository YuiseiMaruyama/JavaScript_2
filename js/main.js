'use strict';

//  #11 forEachを使ってみよう

{
    const a = [1,5,10,100];

    // for(let i = 0; i <= 2; i++){
    //     for(let i = 0; i < a.length; i++){
    //     console.log(a[i]);
    // }

    // a.forEach(item => { //aの配列から1つずつ要素をitemに渡す
    //     console.log(item);
    // });

    a.forEach((item,  index)=> { //aの配列から1つずつ要素をitemに渡す
        console.log(`${index}:${item}`);
    });
   
}
