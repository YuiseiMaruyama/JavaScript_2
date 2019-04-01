'use strict';

// Scope

{
    //クラス

    

   class Player{
       constructor(name,score){ //メソッド
        this.name = name;
        this.score = score;
       }

       showInfo(){//メソッド
           console.log(`name:${this.name} score:${this.score}`);
       }

       static showVersion(){//メソッド
           console.log('Player class ver 1.0');
       }
   }

   const taguchi = new Player('taguchi',32);
   const fkoji = new Player('fkoji',44);

//    console.log(taguchi);
taguchi.showInfo();
fkoji.showInfo();

Player.showVersion();
}


