'use strict';

//  #15 分割代入を使ってみよう

{
    // const numbers = [1,2];
    // // const a = numbers[0];
    // // const b = numbers[1];
    // const [a,b] = numbers;
    // console.log(a); 
    // console.log(b); 

    // const numbers = [1,2,3,8];
    // const [a,b,...rest] = numbers;
    // console.log(a); //1
    // console.log(b); //2
    // console.log(rest); //[3, 8]

    const player = {
        name:'taguchi',
        score: 55,
        hp: 33,
        mp: 22,
    };
    const {name, score, ...points} = player;
    console.log(name);
    console.log(score);
    console.log(points);
}
