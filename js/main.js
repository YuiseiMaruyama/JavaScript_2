'use strict';

//  #22 setTimeoutを使ってみよう
// setIntervalは処理が遅延すると次の処理と重なる
// setTimeoutは完全に終了してから発火するのでシステムに負荷がかかりづらい


{
   let i =0;
    const showTime = () =>{
        console.log(new Date());
        let timeId = setTimeout(showTime,1000);
        i++;
        if(i > 2){
            clearTimeout(timeId);
        }
    };
    
    // setTimeout(showTime,1000);// 指定した時間の後に1回だけ処理を実行する
    showTime();
}
