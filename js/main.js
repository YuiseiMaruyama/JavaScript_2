'use strict';

//  #21 setIntervalで繰り返し処理をしよう
{
    let i = 0;


    const showTime = () =>{
        console.log(new Date());
        i++;
        if(i > 2){
            clearInterval(timerId);
        }
    };
    // setInterval(showTime,ミリ秒); // showTime()だと関数式showTimeを実行した結果をsetIntervalに代入することになる


    let timerId =setInterval(showTime,1000);
}
