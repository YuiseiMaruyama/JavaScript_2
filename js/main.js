'use strict';

// Scope

{
    //オブジェクト

    // const player = ['taguchi',32];

    const player = {
        //プロパティ
        name: 'taguchi',
        score: '32',
    };

    // console.log(player.name);
    // console.log(player['name']);

    // player.score = 100;

    // player.email = 'taguchi@gmail.com';
    // console.log(player);

    delete player.score;
    console.log(player); 
}


