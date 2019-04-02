'use strict';

//  #23 例外処理を使ってみよう


{
//    const a = 'hello';
   const a = 5;

    try{    //エラーが起きそうな場所をtryで囲う
        console.log(a.toUpperCase());
    } catch(e){ //catchの中にエラーの処理をかき、chatchの引数にerrorの'e'を渡すことでJavaScriptがエラー処理だと認識
        console.log(e.message);
    }



   
   console.log('finish');
}
