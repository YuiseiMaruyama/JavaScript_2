'use strict';

// #09 配列の要素を操作してみよう

{
    const a = [1,5,9];

    //add
    // a.unshift(100); //先頭に100追加
    // a.push(200,300); //後ろにに200、300追加

    // console.log(a);

    //remove
    a.shift(); //先頭から1を削除
    a.pop();   //後ろから9を削除
    console.log(a);//[5]
    
}
