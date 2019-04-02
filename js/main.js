'use strict';

//  #14 スプレッド演算子を使ってみよう

{
    //Object

    // const a = [10,20];
    // const b = [1,2,...a];//aのindex(10,20)がbで展開される
    // console.log(b);
   
    // a[0] = 100;
    // console.log(b);

    // const a = [10,20];
    // const sum = (a,b) => a + b;
    // console.log(sum); //(a,b) => a + b
    // console.log(sum(...a)); //30

    const o1 = {a:1};
    const o2 = {...o1,b:2};
    console.log(o2); //{a: 1, b: 2}
}
