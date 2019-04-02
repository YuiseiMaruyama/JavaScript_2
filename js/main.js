'use strict';

//  #12 map､filterを使ってみよう

{
    const a = [1,5,10,100];

    // const b = [];
    // a.forEach(item => {
    //     b.push(item * 2);//aのそれぞれの要素を2倍にしたものをbにpush
    // });
    // console.log(b);

    // const b = a.map(item =>{ //aの全ての要素をmap()内の関数のに適用して返す
    //     return item * 2;
    // });

    // const b = a.map(item => item * 2); 
    // console.log(b);

    const b = a.filter(item => item % 2 === 0);
    console.log(b);
   
}
