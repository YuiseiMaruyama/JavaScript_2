'use strict';

//  #10 spliceで配列を変更してみよう

{
    const a = [1,5,10];

    a.splice(2, 0, 6,7);// (配列を変化させる要素の添字,削除する数,追加する要素)
    console.log(a);//[1, 5, 6, 7, 10]

    const removed = a.splice(1, 2);// (配列を変化させる要素の添字,削除する数,追加する要素)
    console.log(a);//[1, 7, 10]
    console.log(removed);//5,6
    
}
