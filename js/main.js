'use strict';

// Scope

{
//    let x = 1;
//    let y = x;
//    x = 5;
//    console.log(x); //5
//    console.log(y); //1

   let x = [1,2];
   let y = x;
   x[0] = 5;
   console.log(x); //[5,2]
   console.log(y); //[1,2]だが実際は[5,2] なぜなら　xの値ではなく値への参照がコピーされる
}


